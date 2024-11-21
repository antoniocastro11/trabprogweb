import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAvaliacaoComponent } from './listarAva/listar-avaliacao.component';
const routes: Routes = [
  {
    path: "", component: ListarAvaliacaoComponent
  },
  {
    path: "add",
    loadChildren: () => import('./addEdit/add-edit-avaliacao.module').then(modulo => modulo.AddEditAvaliacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarAvaliacaoRoutingModule { }
