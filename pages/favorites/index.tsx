import { Container, Grid, Image, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { MainLayout } from '../../src/components/layouts';
import { PokemonCardComponent } from '../../src/components/ui';
import { NoFavoritesComponent } from '../../src/components/ui/no-favorites/NoFavoritesComponent';
import { localFavorites } from '../../src/utils';

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <>
      <MainLayout title="Favorites pokemons">
        {!favoritePokemons.length ? (
          <NoFavoritesComponent />
        ) : (
          <Grid.Container gap={2} direction="row" justify="flex-start">
            {favoritePokemons.map((id) => (
              <PokemonCardComponent
                pokemon={{
                  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                  id: id,
                }}
                key={id}
              ></PokemonCardComponent>
            ))}
          </Grid.Container>
        )}
      </MainLayout>
    </>
  );
};

export default FavoritesPage;
