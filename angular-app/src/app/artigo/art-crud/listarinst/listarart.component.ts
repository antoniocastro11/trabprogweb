import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../artigo.service';
import { Artigo } from '../../artigo.model';
import { Router } from '@angular/router';

export enum Action {
  VIEW = 'view',
  ADD = 'add',
  EDIT = 'edit'
}

@Component({
  selector: 'app-listarart',
  templateUrl: './listarart.component.html',
  styleUrls: ['./listarart.component.css']
})
export class ListarartComponent implements OnInit {
  public artigos: Artigo[] = [];

  public displayedColumns = ['titulo_artigo', 'nome_autor', 'data_publicacao', 'açoes']

  constructor(private artigoService: ArtigoService, private router: Router) { }


  ngOnInit(): void {
    this.listarArtigos();
  }

  formatarDataPublicacao(data_publicacao: string): string {
    const data = new Date(data_publicacao);
    return data.toLocaleDateString("pt-BR");
  }
  

  listarArtigos() {
    this.artigoService.listAll().subscribe((artigos: Artigo[]) => {
      this.artigos = artigos;
    })
  }

  navigateToAdd() {

    this.router.navigate(['artigo/add'], {
      queryParams: {
        action: Action.ADD,
      }
    });
  }
  navigateToView(id?: number) {

    this.router.navigate(['artigo/add'], {
      queryParams: {
        id: id,
        action: Action.VIEW,

      }
    });
  }
  navigateToEdit(id?: number) {

    this.router.navigate(['artigo/add'], {
      queryParams: {
        id: id,
        action: Action.EDIT,
      }
    });
  }

  deactivate(art: Artigo) {
    art.status = false;
    this.artigoService.deactivate(art.id).subscribe()
  }

  activate(art: Artigo) {
    art.status = true;
    this.artigoService.activate(art.id).subscribe()
  }

}
