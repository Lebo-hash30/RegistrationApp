import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Registration } from './registration'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Registration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
