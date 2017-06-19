import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule
  ],
  providers: [ PokemonService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
