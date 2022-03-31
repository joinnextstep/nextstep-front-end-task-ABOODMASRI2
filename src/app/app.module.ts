import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ashboardComponent } from './component/dashboard/dashboard.component';
import { CrudComponent } from './service/crud/crud.component';

@NgModule({
  
  declarations: [
    AppComponent,
    ashboardComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    CrudComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
