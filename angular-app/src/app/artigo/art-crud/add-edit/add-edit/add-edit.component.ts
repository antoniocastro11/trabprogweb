import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ArtigoService } from 'src/app/artigo/artigo.service';
import { Action } from '../../listarinst/listarart.component';

@Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html',
    styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
    form1!: FormGroup;
    form2!: FormGroup;
    private action!: Action;

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private artService: ArtigoService
    ) {
        this.form1 = this.formBuilder.group({
            id: [null],
            titulo_artigo: ['', [Validators.required]],
            data_publicacao: ['', [Validators.required]],
            nome_autor: ['', [Validators.required]],
            curso_autor: ['', [Validators.required]],
            orientador: ['', [Validators.required]],
            numero_pg: [null],
            idioma: [''],
        });

        this.form2 = this.formBuilder.group({
            resumo_artigo: ['', [Validators.required]], 
        });
    }
    
    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(params => {
            if (params['id']) {
                this.artService.getById(params['id']).subscribe(data => {
                    this.form1.patchValue(data);
                    this.form2.patchValue(data);
                });
            }
            if (params['action'] && params['action'] === Action.VIEW) {
                this.form1.disable();
                this.form2.disable();
            }
            if (params['action'] && params['action'] === Action.EDIT) {
                this.action = params['action'];
            }

            if (params['action'] && params['action'] === Action.ADD) {
                this.action = params['action'];
            }
        });
    }

    create() {
        this.form1.enable();
        this.form2.enable();
        const data = { ...this.form1.value, ...this.form2.value, status: true };
        this.artService.create(data).subscribe(_ => {
            this.back();
        });
    }

    update() {
        const data = { ...this.form1.value, ...this.form2.value };
        
        if (!data.id) return;
        this.artService.update(data.id, data).subscribe(_ => {
            this.back();
        });
    }

    submit() { 
        if (this.action === Action.EDIT) {
            this.update();

        } else if (this.action === Action.ADD) {
            this.create();
        } else {
            this.back();
        }
    }

    back() {
        this.router.navigate(['artigo']);
    }
}
