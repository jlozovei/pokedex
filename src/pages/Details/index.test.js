import React from 'react';
import { render, act, screen, waitFor, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { GlobalContext } from 'store';
import { getPokemonByName, getPokemonSpecies } from 'services';

import { Details } from 'pages/Details';

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

describe('pages/Details', () => {
  it('renders and get pokemon base info', async () => {
    const history = createMemoryHistory();
    const route = '/pokemon/ditto';
    history.push(route);

    render(
      <GlobalContext>
        <Router history={history}>
          <Details />
        </Router>
      </GlobalContext>
    );

    expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
    expect(screen.getByText('Pokédex Data')).toBeInTheDocument();
    expect(screen.getByText('Species Data')).toBeInTheDocument();

    await waitFor(() => expect(getPokemonByName).toHaveBeenCalled());
  });

  it('search species data', async () => {
    const history = createMemoryHistory();
    const route = '/pokemon/ditto';
    history.push(route);

    render(
      <GlobalContext>
        <Router history={history}>
          <Details />
        </Router>
      </GlobalContext>
    );

    const speciesTabNavigation = screen.getByText('Species Data');
    fireEvent.click(speciesTabNavigation);

    await waitFor(() => {
      expect(getPokemonSpecies).toHaveBeenCalled();
    });
  });
});
