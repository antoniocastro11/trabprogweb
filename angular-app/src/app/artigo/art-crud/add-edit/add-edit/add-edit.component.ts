import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { CEPService } from '../cep.service';
import { debounceTime } from 'rxjs';
import { PaisService } from '../pais.service';
import { ArtigoService } from 'src/app/artigo/artigo.service';
import { Action } from '../../listarinst/listarart.component';

interface Pais {
    name: {
        common: string;
    };
    flags: {
        png: string;
    };
}

@Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html',
    styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
    form1!: FormGroup;
    form2!: FormGroup;
    paises: Pais[] = [];
    private action!: Action;

    constructor(
        private formBuilder: FormBuilder,
        private cepService: CEPService,
        private paisService: PaisService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private instService: ArtigoService
    ) {
        this.form1 = this.formBuilder.group({
            id: [null],
            nome: ['', [Validators.required]],
            sigla: ['', [Validators.required]],
            cnpj: ['', [Validators.required]],
        })

        this.form2 = this.formBuilder.group({
            pais: ['', [Validators.required]],
            cep: ['', [Validators.required]],
            logradouro: ['', [Validators.required]],
            bairro: ['', [Validators.required]],
            localidade: ['', [Validators.required]],
            numero: ['', [Validators.required]],
            uf: ['', [Validators.required]],
            complemento: [''],
        })
    }
    ngOnInit(): void {
        this.listenCepControl();
        this.getPaises();

        this.activatedRoute.queryParams.subscribe(params => {
            if (params['id']) {
                this.instService.getById(params['id']).subscribe(data => {
                    this.form1.patchValue(data);
                    this.form2.patchValue(data);
                })
            }
            if (params['action'] && params['action'] == Action.VIEW) {
                this.form1.disable();
                this.form2.disable();
            }
            if (params['action'] && params['action'] == Action.EDIT) {
                this.action = params['action'];
            }
        })
    }

    async listenCepControl() {
        this.form2.get('cep')?.valueChanges.pipe(debounceTime(750)).subscribe(async (value) => {
            try {
                const data = await this.cepService.getCep(value)
                this.form2.patchValue(data, {emitEvent: false, onlySelf: true})
                this.form2.get('logradouro')?.disable()
                this.form2.get('localidade')?.disable()
                this.form2.get('uf')?.disable()
                this.form2.get('bairro')?.disable()

            } catch (error) {
                this.form2.get('logradouro')?.enable()
                this.form2.get('localidade')?.enable()
                this.form2.get('uf')?.enable()
                this.form2.get('bairro')?.enable()
            }

        })
    }
    async getPaises() {
        const paises = await this.paisService.getPaises();
        console.log(paises);
        this.paises = paises;

    }

    create() {
        this.form1.enable()
        this.form2.enable()
        const data = { ...this.form1.value, ...this.form2.value, status: true };
        this.instService.create(data).subscribe(_ => {
            this.back();
        });
    }

    update() {
        const data = { ...this.form1.value, ...this.form2.value };
        
        if (!data.id) return;
        this.instService.update(data.id, data).subscribe(_ => {
            this.back();
        });
    }

    submit() {
        if (this.action == Action.EDIT) {
            this.update();
        } else {
            this.create();
        }
    }

    back() {
        this.router.navigate(['artigo']);
    }
}