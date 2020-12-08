import React from 'react';
import { render, screen } from '@testing-library/react';

import { PokemonType } from 'components/PokemonType';

describe('components/ResponsiveTable', () => {
  it('renders with default children', () => {
    render(<PokemonType />);

    expect(screen.getByText('pokemon-type')).toBeInTheDocument();
  });

  it('renders with custom type', () => {
    render(<PokemonType type="water" />);

    expect(screen.getByText('water')).toBeInTheDocument();
  });
});
