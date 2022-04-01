import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { pokeApi } from '../../src/api';
import { useToggleFavorite } from '../../src/components/hooks';
import { MainLayout } from '../../src/components/layouts';
import { PokemonInterface } from '../../src/interfaces';

interface Props {
  pokemon: PokemonInterface;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { isFavorite, existInFavorites, toggleFavorite } = useToggleFavorite();

  useEffect(() => {
    if (existInFavorites(pokemon.id) !== isFavorite) {
      toggleFavorite(pokemon.id);
    }
  });

  const handleToggleFavorite = (id: number) => {
    toggleFavorite(id);
    if (isFavorite) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { x: 1, y: 0 },
    });
  };

  return (
    <MainLayout title={`Pokémon - ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              ></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                onClick={() => handleToggleFavorite(pokemon.id)}
                ghost={!isFavorite}
              >
                {`${isFavorite ? 'Remove' : 'Add'} to favorites`}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons50 = [...Array(50)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemons50.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

/* Just run on build time */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<PokemonInterface>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
