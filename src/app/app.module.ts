import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { Bai1lab05Component } from './bai1lab05/bai1lab05.component';
import { Bai2lab05Component } from './bai2lab05/bai2lab05.component';
import { Bai3lab05Component } from './bai3lab05/bai3lab05.component';
import { Bai4lab05Component } from './bai4lab05/bai4lab05.component';
import { Bai5lab05Component } from './bai5lab05/bai5lab05.component';
@NgModule({
  declarations: [
    AppComponent,
    Bai1lab05Component,
    Bai2lab05Component,
    Bai3lab05Component,
    Bai4lab05Component,
    Bai5lab05Component
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
