import { Component, OnInit } from '@angular/core';
import { PokemonServiceTsService } from './pokemon.service.ts.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.scss']
})
export class PokemonApiComponent implements OnInit {
  pokemonData:any;
  pokemons:any[] = []
  constructor(private pokemonServiceTsService: PokemonServiceTsService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonServiceTsService.getPokemon().subscribe((response:any) => {
      // this.pokemonData = data;
      // console.log(this.pokemonData);

      response.results.forEach((result:any) => {
        this.pokemonServiceTsService.getMorePokemonData(result.name).subscribe((uniqResponse:any)=>{
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        })
      });
    })
  }

  searchTerm: string = '';


  search(searchValue:any){
    debugger
    this.searchTerm = searchValue;
    console.log(this.searchTerm)
  }
}
