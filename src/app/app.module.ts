import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    MaestrosComponent,
    DetalleComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
