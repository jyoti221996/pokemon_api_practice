import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceTsService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get(`${this.apiUrl}/pokemon?limit=50`);
  }

  getMorePokemonData(name: string) {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }
}
