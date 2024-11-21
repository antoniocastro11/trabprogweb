import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  {path:"", component: InicialComponent},
  {
    path: "artigo",
    loadChildren: () => import('./artigo/art-crud/art-listar.module').then(modulo => modulo.ArtListarModule),
  },
  {
    path: "avaliacao",
    loadChildren: () => import('./avaliacao/listar-avaliacao.module').then(modulo => modulo.ListarAvaliacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
