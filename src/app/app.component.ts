import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public pokemonList: Array<Pokemon>;
  public pokemonDetails: Pokemon;

  constructor(
    private http: Http,
    private pokemonService: PokemonService
  ) {
    this.pokemonList = [];
  };

  ngOnInit() {
    this.pokemonService.getPokemons().then(response => this.pokemonList = response);
  }

  getDetails(pokemon: Pokemon) {
    this.pokemonDetails = null;  // Made details null to show loader spinner
    this.pokemonService.getPokemon(pokemon.id).then(response => setTimeout(() => this.pokemonDetails = response, 1000)); // Timeout added because the server response is instant
  }
}
