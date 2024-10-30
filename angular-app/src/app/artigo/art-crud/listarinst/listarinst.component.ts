import { Component, OnInit } from '@angular/core';
import { InstituicaoService } from '../../instituicao.service';
import { Observable } from 'rxjs';
import { Instituicao } from '../../instituicao.model';
import { Router } from '@angular/router';

export enum Action {
  VIEW = 'view',
  ADD = 'add',
  EDIT = 'edit'
}

@Component({
  selector: 'app-listarinst',
  templateUrl: './listarinst.component.html',
  styleUrls: ['./listarinst.component.css']
})
export class ListarinstComponent implements OnInit {
  public instituicoes: Instituicao[] = [];

  public displayedColumns = ['nome', 'sigla', 'pais', 'açoes']

  constructor(private instituicaoService: InstituicaoService, private router: Router) { }


  ngOnInit(): void {
    this.listarInstituicao();
  }


  listarInstituicao() {
    this.instituicaoService.listAll().subscribe((instituicoes: Instituicao[]) => {

      console.log(instituicoes)

      this.instituicoes = instituicoes;
    })
  }

  navigateToAdd() {

    this.router.navigate(['instituicao/add'], {

    });
  }
  navigateToView(id?: number) {

    this.router.navigate(['instituicao/add'], {
      queryParams: {
        id: id,
        action: Action.VIEW,

      }
    });
  }
  navigateToEdit(id?: number) {

    this.router.navigate(['instituicao/add'], {
      queryParams: {
        id: id,
        action: Action.EDIT,
      }
    });
  }

  deactivate(inst: Instituicao) {
    inst.status = false;
    this.instituicaoService.deactivate(inst.id).subscribe()
  }

  activate(inst: Instituicao) {
    inst.status = true;
    this.instituicaoService.activate(inst.id).subscribe()
  }

}
