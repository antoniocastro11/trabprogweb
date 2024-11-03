import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarranavComponent } from './barranav/barranav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InicialComponent } from './inicial/inicial.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditModule } from './artigo/art-crud/add-edit/add-edit.module';
import { InicialModule } from './inicial/inicial.module';

@NgModule({
  declarations: [
    AppComponent,
    BarranavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AddEditModule,
    InicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
