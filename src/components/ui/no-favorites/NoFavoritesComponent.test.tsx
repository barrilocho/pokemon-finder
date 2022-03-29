import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NoFavoritesComponent } from './NoFavoritesComponent';

describe('No Favorites component', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<NoFavoritesComponent />);
  });

  test('should render the component', () => {
    expect(component).toBeTruthy();
  });

  test('should render the component with the correct styles', () => {
    const element = component.getByText('No favorites added');
    expect(element.parentElement).toHaveClass('no-favorites');
  });

  test('should render the component with the correct text', () => {
    const element = component.getByText('No favorites added');
    expect(element).toBeInTheDocument();
  });
});
