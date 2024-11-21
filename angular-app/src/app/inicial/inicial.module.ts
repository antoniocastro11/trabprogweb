import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InicialComponent } from './inicial.component';
import { InicialRoutingModule } from './inicial-routing.module';

@NgModule({
  declarations: [InicialComponent],
<<<<<<< HEAD
  imports: [MatButtonModule, MatCardModule, InicialRoutingModule],
  providers: [],
=======
  imports: [MatButtonModule, MatCardModule]
>>>>>>> e1af734fc4493217f4750559d4451e28a8e0487d
})
export class InicialModule {}