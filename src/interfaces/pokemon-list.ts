import { Sprites } from './pokemon';

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name?: string;
  url?: string;
  id: number;
  img: string;
}

export interface SpritesPokemon extends SmallPokemon {
  sprites: Sprites;
}
