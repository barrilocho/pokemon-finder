import Head from 'next/head';
import { FC } from 'react';
import { NavbarComponent } from '../../ui/navbar/Navbar';

interface Props {
  title: string;
}
const origin = typeof window === 'undefined' ? '' : window.location.origin;

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
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la páginasobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.jpg`} />
      </Head>
      <NavbarComponent />
      <main>{children}</main>
    </>
  );
};
