import { pokeApi } from '../api';
import { PokemonInterface } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    const { data } = await pokeApi.get<PokemonInterface>(url);
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
    return pokemon;
  } catch (error) {
    return null;
  }
};
