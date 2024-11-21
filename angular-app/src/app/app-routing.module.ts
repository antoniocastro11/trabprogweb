import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  {
    path:"", component: LoginComponent
  },
  {
    path: "artigo",
    loadChildren: () => import('./artigo/art-crud/art-listar.module').then(modulo => modulo.ArtListarModule)
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path:"inicial", loadChildren: () => import('./inicial/inicial.module').then(modulo => modulo.InicialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
