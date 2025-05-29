import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReadExcelComponent } from './components/read-excel/read-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadExcelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
