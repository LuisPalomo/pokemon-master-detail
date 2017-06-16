import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private http: Http
  ) { };

  title = 'app';
}
