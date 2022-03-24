import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import { MainLayout } from '../src/components/layouts';

const Home: NextPage = () => {
  return (
    <>
      <MainLayout title="Listado de Pokemons">
        <Button>test</Button>
      </MainLayout>
    </>
  );
};

export default Home;
