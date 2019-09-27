import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule, MatChipsModule, MatCheckboxModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatSelectModule,
    MatChipsModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
