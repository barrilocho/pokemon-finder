import { FC } from 'react';
import { Container, Image, Text } from '@nextui-org/react';
import styles from './NoFavoritesStyles.module.scss';
export const NoFavoritesComponent: FC = () => {
  return (
    <Container className={styles['no-favorites']}>
      <Text h1>No favorites added</Text>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg`}
        alt="No favorites added pokemon image"
        width="200px"
        height="200px"
        css={{ opacity: 0.1, backgroundColor: 'white' }}
      />
    </Container>
  );
};
