import { Component, NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InicialComponent } from './inicial.component';

@NgModule({
    declarations: [InicialComponent],
    imports: [MatButtonModule, MatCardModule],
    providers: [],
  })

export class InicialModule {}