import React from 'react';
import { render, screen } from '@testing-library/react';

import { PokeCard } from 'components/PokeCard';

describe('components/PokeCard', () => {
  it('renders with default props', () => {
    render(<PokeCard />);

    const image = screen.getByAltText('Bulbasaur');

    expect(screen.getByRole('heading')).toHaveTextContent('Bulbasaur');
    expect(image.src).toBe('https://img.pokemondb.net/artwork/bulbasaur.jpg');
  });

  it('renders with custom props', () => {
    render(<PokeCard name="lugia" />);

    const image = screen.getByAltText('Lugia');

    expect(screen.getByRole('heading')).toHaveTextContent('Lugia');
    expect(image.src).toBe('https://img.pokemondb.net/artwork/lugia.jpg');
  });
});
