import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../../models';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCardComponent: FC<Props> = ({ pokemon }) => {
  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
