import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstListarRoutingModule } from './art-listar-routing.module';
import { ListarartComponent } from './listarinst/listarart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    ListarartComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    InstListarRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ArtListarModule { }
