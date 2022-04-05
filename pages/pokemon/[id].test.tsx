import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonPage from './[id]';

describe('Test pokemon Card component', () => {
  let component: RenderResult;
  const pokemon1 = {
    id: 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`,
    name: 'bulbasaur',
    sprites: {
      back_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          front_female: null,
        },
        home: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      },
    },
  };
  beforeEach(() => {
    component = render(<PokemonPage pokemon={pokemon1} />);
  });

  test('should render the component', () => {
    expect(component).toBeTruthy();
  });

  test('should has favorites button', () => {
    const button = component.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('Test favorite button exist', async () => {
    const button = component.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('Test favorite button click', async () => {
    const button = component.getByRole('button');
    await fireEvent.click(button);
    const removeLabel = component.getByText('Remove to favorites');
    expect(removeLabel).toBeInTheDocument();
    await fireEvent.click(button);
    const addButton = component.getByText('Add to favorites');
    expect(addButton).toBeInTheDocument();
  });
  test('Test pokemon image exist', () => {
    const imageElement = component.getByAltText(pokemon1.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeInstanceOf(Image);
  });
  test('Test pokemon name exist', () => {
    const imageElement = component.getByText(pokemon1.name);
    expect(imageElement).toBeInTheDocument();
  });
});
