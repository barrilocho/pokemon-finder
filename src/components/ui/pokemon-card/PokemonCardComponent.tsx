import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../../interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
  redirectTo?: string;
}

export const PokemonCardComponent: FC<Props> = ({
  pokemon,
  redirectTo = `/name/${pokemon.name}`,
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(redirectTo);
  };
  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card onClick={onClick} hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            alt={`${pokemon.name} image`}
            src={pokemon.img}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            {pokemon.name && <Text transform="capitalize">{pokemon.name}</Text>}
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
