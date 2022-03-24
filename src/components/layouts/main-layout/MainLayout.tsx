import Head from 'next/head';
import { FC } from 'react';
import { NavbarComponent } from '../../ui/navbar/Navbar';

interface Props {
  title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon Finder'} </title>
        <meta name="author" content="Alejandro Barrios" />
        <meta
          name="description"
          content={`Pokemon finder application, ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, Pokemon, Pokedex, Pokemon finder`}
        />
      </Head>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
};
