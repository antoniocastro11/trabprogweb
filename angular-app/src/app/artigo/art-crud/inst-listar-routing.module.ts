import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarinstComponent } from './listarinst/listarinst.component';
import { AddEditComponent } from './add-edit/add-edit/add-edit.component';
import { InstituicaoService } from '../instituicao.service';

const routes: Routes = [
  {
    path: "", component: ListarinstComponent
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
