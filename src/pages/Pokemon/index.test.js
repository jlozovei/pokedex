import React from 'react';
import { render, act, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'store';
import { getPokemonByName, getPokemonSpecies } from 'services';

import { Pokemon } from 'pages/Pokemon';

jest.mock('../../services', () => ({
  getPokemonByName: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          name: 'Ditto',
          height: 3,
          weight: 40,
          id: 132,
          base_experience: 101
        }
      ]
    })
  ),
  getPokemonSpecies: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          base_happiness: 70,
          capture_rate: 35,
          egg_groups: [],
          gender_rate: -1,
          genera: [],
          names: []
        }
      ]
    })
  )
}));

describe('pages/Pokemon', () => {
  it('renders and get pokemon base info', async () => {
    render(
      <Provider>
        <Router>
          <Pokemon />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Pokédex Data')).toBeInTheDocument();
    expect(screen.getByText('Species Data')).toBeInTheDocument();

    await waitFor(() => {
      expect(getPokemonByName).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
    });
  });

  it('search species data', async () => {
    render(
      <Provider>
        <Router>
          <Pokemon />
        </Router>
      </Provider>
    );

    const speciesTabNavigation = screen.getByText('Species Data');
    fireEvent.click(speciesTabNavigation);

    await waitFor(() => {
      expect(getPokemonSpecies).toHaveBeenCalled();
    });
  });
});
