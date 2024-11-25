import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListarAvaliacaoComponent } from './listarAva/listar-avaliacao.component';
import { ListarAvaliacaoRoutingModule } from './listar-avaliacao-routing.module';



@NgModule({
  declarations: [
    ListarAvaliacaoComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ListarAvaliacaoRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ListarAvaliacaoModule { }
