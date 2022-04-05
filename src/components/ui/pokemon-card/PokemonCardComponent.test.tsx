import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PokemonCardComponent } from './PokemonCardComponent';

describe('Test pokemon Card component', () => {
  let component: RenderResult;
  const pokemon1 = {
    id: 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`,
    name: 'bulbasaur',
  };
  beforeEach(() => {
    component = render(<PokemonCardComponent pokemon={pokemon1} />);
  });

  test('should render the component', () => {
    expect(component).toBeTruthy();
  });

  test('should has the image with pokemon', () => {
    const element = component.getByAltText(`${pokemon1.name} image`);
    expect(element).toBeInTheDocument();
  });

  test('should has the name of pokemon', () => {
    const element = component.getByText(pokemon1.name);
    expect(element).toBeInTheDocument();
  });

  test('should has the id of pokemon', () => {
    const element = component.getByText(`#${pokemon1.id}`);
    expect(element).toBeInTheDocument();
  });
});
