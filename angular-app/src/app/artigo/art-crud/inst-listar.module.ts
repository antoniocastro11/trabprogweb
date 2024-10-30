import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstListarRoutingModule } from './inst-listar-routing.module';
import { ListarinstComponent } from './listarinst/listarinst.component';

import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListarinstComponent
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
export class InstListarModule { }
