import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { SnackbarMessageComponent } from './data-grid/shared/snackbar-message/snackbar-message.component';

@NgModule({
  entryComponents: [
    SnackbarMessageComponent
  ],
  declarations: [
    AppComponent,
    DataGridComponent,
    SnackbarMessageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
