import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstListarRoutingModule } from './art-listar-routing.module';
import { ListarartComponent } from './listarinst/listarart.component';

import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListarartComponent
  ],
  imports: [
    CommonModule,
    InstListarRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ArtListarModule { }
