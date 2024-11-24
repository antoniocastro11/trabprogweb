import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InicialComponent } from './inicial.component';
import { InicialRoutingModule } from './inicial-routing.module';

@NgModule({
  declarations: [InicialComponent],
  imports: [MatButtonModule, MatCardModule, InicialRoutingModule],
  providers: [],
})
export class InicialModule {}
