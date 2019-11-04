import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { Bai1lab05Component } from './bai1lab05/bai1lab05.component';
import { Bai2lab05Component } from './bai2lab05/bai2lab05.component';
import { Bai3lab05Component } from './bai3lab05/bai3lab05.component';
import { Bai4lab05Component } from './bai4lab05/bai4lab05.component';
import { Bai5lab05Component } from './bai5lab05/bai5lab05.component';
import { Lab8Component } from './lab8/lab8.component';
import { Detaillab8Component } from './detaillab8/detaillab8.component';
import { BycateComponent } from './bycate/bycate.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1lab05Component,
    Bai2lab05Component,
    Bai3lab05Component,
    Bai4lab05Component,
    Bai5lab05Component,
     Lab8Component,
     Detaillab8Component,
     BycateComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', component: Lab8Component},
        {path: 'lab8', component: Lab8Component},
        {path: 'detaillab8/:id', component: Detaillab8Component},
        {path: 'bycate/:id', component: BycateComponent},
        

      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
