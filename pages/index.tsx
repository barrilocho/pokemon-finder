import { GetStaticProps, NextPage } from 'next';
import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../src/api';
import { MainLayout } from '../src/components/layouts';
import { PokemonListResponse, SmallPokemon } from '../src/interfaces';
import { PokemonCardComponent } from '../src/components/ui';
interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => {
            return <PokemonCardComponent key={pokemon.id} pokemon={pokemon} />;
          })}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

/* Just run on build time */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100');
  const pokemons: SmallPokemon[] = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
