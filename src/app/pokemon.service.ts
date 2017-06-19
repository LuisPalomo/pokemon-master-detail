import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Pokemon } from './pokemon.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonService {

  private apiUrl = 'http://localhost:8080/api/pokemons';

  constructor(
    private http: Http
  ) { };

  getPokemons(): Promise<Array<Pokemon>> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Array<Pokemon>)
      .catch(this.handleError);
  }

  getPokemon(id): Promise<Pokemon> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Pokemon)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
