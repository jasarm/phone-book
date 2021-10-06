import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    OrderModule // <- import OrderModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
