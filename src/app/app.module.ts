import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { AppComponent } from './app.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
