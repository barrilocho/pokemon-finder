import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme, Switch } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Image from 'next/image';
import { FC, useMemo } from 'react';
import styles from './NavbarStyles.module.scss';

export const NavbarComponent: FC = () => {
  const { theme, isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  const randomInteger = useMemo(() => Math.floor(Math.random() * 151) + 1, []);
  return (
    <div
      className={styles.navbar__container}
      // style={{ backgroundColor: theme?.colors.primaryLight.value }}
    >
      <NextLink href="/" passHref>
        <Link className={styles.navbar__link}>
          <Image
            width={60}
            alt="Icono Pokemon finder"
            height={60}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomInteger}.svg`}
          ></Image>
          <Text className={styles.navbar__title} h2>
            P
          </Text>
          <Text h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer className={styles.navbar__spacer}></Spacer>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <Spacer></Spacer>
      <NextLink href="/favorites" passHref>
        <Link className={styles.navbar__link}>
          <Text h5>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
