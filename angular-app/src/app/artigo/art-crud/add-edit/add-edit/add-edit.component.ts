import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { CEPService } from '../cep.service';
import { debounceTime } from 'rxjs';
import { PaisService } from '../pais.service';
import { InstituicaoService } from 'src/app/artigo/instituicao.service';
import { Action } from '../../listarinst/listarinst.component';

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
    instForm1!: FormGroup;
    instForm2!: FormGroup;
    paises: Pais[] = [];
    private action!: Action;

    constructor(
        private formBuilder: FormBuilder,
        private cepService: CEPService,
        private paisService: PaisService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private instService: InstituicaoService
    ) {
        this.instForm1 = this.formBuilder.group({
            id: [null],
            nome: ['', [Validators.required]],
            sigla: ['', [Validators.required]],
            cnpj: ['', [Validators.required]],
        })

        this.instForm2 = this.formBuilder.group({
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
                    this.instForm1.patchValue(data);
                    this.instForm2.patchValue(data);
                })
            }
            if (params['action'] && params['action'] == Action.VIEW) {
                this.instForm1.disable();
                this.instForm2.disable();
            }
            if (params['action'] && params['action'] == Action.EDIT) {
                this.action = params['action'];
            }
        })
    }

    async listenCepControl() {
        this.instForm2.get('cep')?.valueChanges.pipe(debounceTime(750)).subscribe(async (value) => {
            try {
                const data = await this.cepService.getCep(value)
                this.instForm2.patchValue(data, {emitEvent: false, onlySelf: true})
                this.instForm2.get('logradouro')?.disable()
                this.instForm2.get('localidade')?.disable()
                this.instForm2.get('uf')?.disable()
                this.instForm2.get('bairro')?.disable()

            } catch (error) {
                this.instForm2.get('logradouro')?.enable()
                this.instForm2.get('localidade')?.enable()
                this.instForm2.get('uf')?.enable()
                this.instForm2.get('bairro')?.enable()
            }

        })
    }
    async getPaises() {
        const paises = await this.paisService.getPaises();
        console.log(paises);
        this.paises = paises;

    }

    create() {
        this.instForm1.enable()
        this.instForm2.enable()
        const data = { ...this.instForm1.value, ...this.instForm2.value, status: true };
        this.instService.create(data).subscribe(_ => {
            this.back();
        });
    }

    update() {
        const data = { ...this.instForm1.value, ...this.instForm2.value };
        
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
        this.router.navigate(['instituicao']);
    }
}