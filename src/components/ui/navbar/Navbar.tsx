import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './NavbarStyles.module.scss';

export const NavbarComponent = () => {
  const { theme } = useTheme();
  const randomInteger = useMemo(() => Math.floor(Math.random() * 151) + 1, []);
  return (
    <div
      className={styles.navbar__container}
      style={{ backgroundColor: theme?.colors.gray900.value }}
    >
      <NextLink href="/" passHref>
        <Link className={styles.navbar__link}>
          <Image
            width={60}
            alt="Icono Pokemon finder"
            height={60}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomInteger}.svg`}
          ></Image>
          <Text className={styles.navbar__title} color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer className={styles.navbar__spacer}></Spacer>
      <NextLink href="/favorites" passHref>
        <Link className={styles.navbar__link}>
          <Text color="white" h5>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
