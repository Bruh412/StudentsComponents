import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { PrintEntryComponent } from './print-entry/print-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    AddEntryComponent,
    PrintEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
