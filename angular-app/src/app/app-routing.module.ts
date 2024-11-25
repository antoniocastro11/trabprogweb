import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InicialComponent } from './views/inicial/inicial.component';

const routes: Routes = [
  {
    path:"", component: LoginComponent
  },
  {
    path: "artigo",
    loadChildren: () => import('./views/artigo/art-crud/art-listar.module').then(modulo => modulo.ArtListarModule),
  },
  {
    path: "avaliacao",
    loadChildren: () => import('./views/avaliacao/listar-avaliacao.module').then(modulo => modulo.ListarAvaliacaoModule)
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path:"inicial", loadChildren: () => import('./views/inicial/inicial.module').then(modulo => modulo.InicialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
