import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../artigo.service';
import { Artigo } from '../../artigo.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource!: MatTableDataSource<Artigo>;
  public displayedColumns = ['titulo_artigo', 'nome_autor', 'data_publicacao', 'açoes']

  constructor(private artigoService: ArtigoService, private router: Router) { }


  ngOnInit(): void {
    this.listarArtigos();
  }

  formatarDataPublicacao(dataPublicacao: string): string {
    const data = new Date(dataPublicacao);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: Artigo, filter: string) => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return currentTerm + (data as { [key: string]: any })[key] + '◬';
      }, '').toLowerCase();
      const normalizedFilter = filter.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const normalizedData = dataStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalizedData.indexOf(normalizedFilter) !== -1;
    };
  }

  listarArtigos() {
    this.artigoService.listAll().subscribe((artigos: Artigo[]) => {
      this.artigos = artigos;
      this.dataSource = new MatTableDataSource(artigos);
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
