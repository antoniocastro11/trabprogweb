import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../../../services/artigo.service';
import { Artigo, StatusArtigo } from '../../../../models/artigo.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export enum Action {
  VIEW = 'view',
  ADD = 'add',
  EDIT = 'edit',
}

@Component({
  selector: 'app-listarart',
  templateUrl: './listarart.component.html',
  styleUrls: ['./listarart.component.css'],
})
export class ListarartComponent implements OnInit {
  public artigos: Artigo[] = [];
  dataSource!: MatTableDataSource<Artigo>;
  public displayedColumns = [
    'titulo_artigo',
    'nome_autor',
    'data_publicacao',
    'açoes',
  ];

  constructor(private artigoService: ArtigoService, private router: Router) {}

  ngOnInit(): void {
    this.listarArtigos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: Artigo, filter: string) => {
      const dataStr = Object.keys(data)
        .reduce((currentTerm: string, key: string) => {
          return currentTerm + (data as { [key: string]: any })[key] + '◬';
        }, '')
        .toLowerCase();
      const normalizedFilter = filter
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      const normalizedData = dataStr
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return normalizedData.indexOf(normalizedFilter) !== -1;
    };
  }

  listarArtigos() {
    this.artigoService.listAll().subscribe((artigos: Artigo[]) => {
      const artigosAtivos = artigos.filter(
        (artigo) => artigo.status === StatusArtigo.APROVADO
      );
      this.dataSource = new MatTableDataSource(artigosAtivos);
    });
  }

  navigateToAdd() {
    this.router.navigate(['artigo/add'], {
      queryParams: {
        action: Action.ADD,
      },
    });
  }
  navigateToView(id?: number) {
    this.router.navigate(['artigo/add'], {
      queryParams: {
        id: id,
        action: Action.VIEW,
      },
    });
  }
}
