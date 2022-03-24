import { GetStaticProps, NextPage } from 'next';
import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import { pokeApi } from '../src/api';
import { MainLayout } from '../src/components/layouts';
import { PokemonListResponse, SmallPokemon } from '../src/models';
interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, name, img }) => {
            return (
              <Grid key={id} xs={6} sm={3} md={2} xl={1}>
                <Card hoverable clickable>
                  <Card.Body css={{ p: 1 }}>
                    <Card.Image src={img} width="100%" height={140} />
                  </Card.Body>
                  <Card.Footer>
                    <Row justify="space-between">
                      <Text transform="capitalize">{name}</Text>
                      <Text>#{id}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </MainLayout>
    </>
  );
};

/* Just run on build time */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=50');
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
