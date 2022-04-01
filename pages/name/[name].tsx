import { Image, Card, Grid, Text, Button, Container } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { pokeApi } from '../../src/api';
import { useToggleFavorite } from '../../src/components/hooks';
import { MainLayout } from '../../src/components/layouts';
import { PokemonInterface, PokemonListResponse } from '../../src/interfaces';
interface Props {
  pokemon: PokemonInterface;
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
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

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  console.log(ctx, 'ctx paths');
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100');
  return {
    paths: data.results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<PokemonInterface>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data,
    },
  };
};
