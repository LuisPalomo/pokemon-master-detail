import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {

  private apiUrl = 'localhost:8080/api/pokemons';

  constructor(
    private http: Http
  ) { };

  getPokemons(): Promise<Array<Pokemon>> {
    return this.http.get(this.apiUrl)
    .toPromise()
    .then();
  }
}
