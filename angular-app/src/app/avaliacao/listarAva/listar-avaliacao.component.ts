import { Component, OnInit } from '@angular/core';
import { Artigo, StatusArtigo } from 'src/app/artigo/artigo.model';
import { ArtigoService } from 'src/app/artigo/artigo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  validateApprovedOrAnalysisStatus,
  validateRepprovedStatus,
} from 'src/app/common/utils/validateStatus';

export enum Action {
  ADD = 'ADD',
  VIEW = 'VIEW',
  EDIT = 'EDIT',
}

@Component({
  selector: 'app-listar-avaliacao',
  templateUrl: './listar-avaliacao.component.html',
  styleUrls: ['./listar-avaliacao.component.css'],
})
export class ListarAvaliacaoComponent implements OnInit {
  public artigos: Artigo[] = [];
  dataSource!: MatTableDataSource<Artigo>;

  statusArtigo = StatusArtigo;

  public displayedColumns = [
    'titulo_artigo',
    'nome_autor',
    'data_publicacao',
    'status',
    'açoes',
  ];

  constructor(private artigoService: ArtigoService, private router: Router) {}

  ngOnInit(): void {
    this.listarArtigos();
  }

  listarArtigos() {
    this.artigoService.listAll().subscribe((artigos: Artigo[]) => {
      this.artigos = artigos;
      this.dataSource = new MatTableDataSource(artigos);
    });
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

  validateApprovedOrAnalysis(status: StatusArtigo) {
    return validateApprovedOrAnalysisStatus(status);
  }

  validateRepproved(status: StatusArtigo) {
    return validateRepprovedStatus(status);
  }

  navigateToAdd() {
    this.router.navigate(['avaliacao/add'], {
      queryParams: {
        action: Action.ADD,
      },
    });
  }
  navigateToView(id?: number) {
    this.router.navigate(['avaliacao/add'], {
      queryParams: {
        id: id,
        action: Action.VIEW,
      },
    });
  }
  navigateToEdit(id?: number) {
    this.router.navigate(['avaliacao/add'], {
      queryParams: {
        id: id,
        action: Action.EDIT,
      },
    });
  }

  deactivate(art: Artigo) {
    art.status = StatusArtigo.REPROVADO;
    this.artigoService.deactivate(art.id).subscribe();
  }

  activate(art: Artigo) {
    art.status = StatusArtigo.EM_ANALISE;
    this.artigoService.activate(art.id).subscribe();
  }
}
