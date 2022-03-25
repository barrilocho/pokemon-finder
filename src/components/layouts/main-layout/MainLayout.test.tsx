import React, { FC } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MainLayout } from './MainLayout';

describe('Test <MainLayout />', () => {
  let mainLayoutComponent: RenderResult;
  const childrenContent = 'Children test';
  beforeEach(() => {
    mainLayoutComponent = render(
      <MainLayout title="Pokemon">
        <span>{childrenContent}</span>
      </MainLayout>
    );
  });

  test('MainLayout should render with children', () => {
    const children = mainLayoutComponent.getByText(childrenContent);
    expect(children).toBeInTheDocument();
  });
});
