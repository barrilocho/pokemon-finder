import { Container, Image, Text } from '@nextui-org/react';
import { NextPage } from 'next';

import { MainLayout } from '../../src/components/layouts';
import { NoFavoritesComponent } from '../../src/components/ui/no-favorites/NoFavoritesComponent';

const FavoritesPage: NextPage = () => {
  return (
    <>
      <MainLayout title="Favorites pokemons">
        <NoFavoritesComponent />
      </MainLayout>
    </>
  );
};

export default FavoritesPage;
