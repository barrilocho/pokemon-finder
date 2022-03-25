import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import { NavbarComponent } from './Navbar';
import styles from './NavbarStyles.module.scss';
import { createMockRouter } from '../../../test-utils/createMockRouter';

describe('Navbar component tests', () => {
  let navbarComponent: RenderResult;

  beforeEach(() => {
    navbarComponent = render(
      <RouterContext.Provider value={createMockRouter({})}>
        <NavbarComponent />
      </RouterContext.Provider>
    );
  });

  test('should have logo', () => {
    const logoElement = navbarComponent.getByAltText('Icono Pokemon finder');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toBeDefined();
  });
  test('should have P bigger', () => {
    const logoElement = navbarComponent.getByText('P');
    expect(logoElement).toHaveClass(styles.navbar__title);
  });
  test('should have okémon small', () => {
    const logoElement = navbarComponent.getByText('okémon');
    expect(logoElement).not.toHaveClass(styles.navbar__title);
  });
  test('should have Favorites word', () => {
    const favoritesElement = navbarComponent.getByText('Favorites');
    expect(favoritesElement).toBeInTheDocument();
  });
  test('should have anchor tag with href="/favorites"', () => {
    const favoritesElement = navbarComponent
      .getByText('Favorites')
      .closest('a');
    expect(favoritesElement).toHaveAttribute('href', '/favorites');
  });
  test('should have anchor tag with href="/"', () => {
    const favoritesElement = navbarComponent.getByText('P').closest('a');
    expect(favoritesElement).toHaveAttribute('href', '/');
  });
});
