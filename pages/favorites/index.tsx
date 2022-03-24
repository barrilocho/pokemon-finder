import { NextPage } from 'next';

import { MainLayout } from '../../src/components/layouts';

const FavoritesPage: NextPage = () => {
  return (
    <>
      <MainLayout title="Favorites pokemons">
        <h1>Favoritos</h1>
      </MainLayout>
    </>
  );
};

export default FavoritesPage;
