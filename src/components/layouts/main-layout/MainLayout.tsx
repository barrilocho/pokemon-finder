import Head from 'next/head';
import { Children, FC } from 'react';

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
          content={`Pokemon finder application, pokemon ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, Pokemon, Pokedex, Pokemon finder`}
        />
      </Head>
      <main>{children}</main>
    </>
  );
};
