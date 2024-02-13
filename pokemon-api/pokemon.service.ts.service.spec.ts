import { TestBed } from '@angular/core/testing';

import { PokemonServiceTsService } from './pokemon.service.ts.service';

describe('PokemonServiceTsService', () => {
  let service: PokemonServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
