import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarartComponent } from './listarinst/listarart.component';
const routes: Routes = [
  {
    path: "", component: ListarartComponent
  },
  {
    path: "add",
    loadChildren: () => import('./add-edit/add-edit.module').then(modulo => modulo.AddEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstListarRoutingModule { }
