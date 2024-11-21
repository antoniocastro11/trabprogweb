import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAvaliacaoComponent } from './add-edit/add-edit-avaliacao.component';

const routes: Routes = [
    {
        path: '', component: AddEditAvaliacaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEditAvaliacaoRoutingModule { }