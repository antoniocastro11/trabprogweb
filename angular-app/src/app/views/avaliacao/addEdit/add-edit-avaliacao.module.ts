import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditAvaliacaoComponent } from './add-edit/add-edit-avaliacao.component';
import { AddEditAvaliacaoRoutingModule } from './add-edit-avaliacao-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    declarations: [
        AddEditAvaliacaoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatButtonModule,
        MatSelectModule,
        AddEditAvaliacaoRoutingModule
    ],
})
export class AddEditAvaliacaoModule { }