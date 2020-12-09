import React from 'react';
import { render, act, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'store';
import { getPokemons, getPokemonByName } from 'services';

import { Home } from 'pages/Home';

jest.mock('../../services', () => ({
  getPokemons: jest.fn(() =>
    Promise.resolve({
      data: []
    })
  ),
  getPokemonByName: jest.fn(() =>
    Promise.resolve({
      data: []
    })
  )
}));

describe('pages/Home', () => {
  it('renders', async () => {
    render(
      <Provider>
        <Router>
          <Home />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('pokemon-logo')).toBeInTheDocument();
    expect(screen.getByText('Or try one of those:')).toBeInTheDocument();

    await waitFor(() => expect(getPokemons).toHaveBeenCalled());
  });

  it('search pokemon', async () => {
    render(
      <Provider>
        <Router>
          <Home />
        </Router>
      </Provider>
    );

    const submit = screen.getByText('Search');
    const searchbox = screen.getByLabelText('Type the name of a Pokémon:');

    expect(submit).toBeInTheDocument();
    expect(searchbox).toBeInTheDocument();

    fireEvent.change(searchbox, { target: { value: 'ditto' } });
    expect(searchbox.value).toBe('ditto');
    fireEvent.click(submit);

    await waitFor(() => {
      expect(getPokemonByName).toHaveBeenCalledWith('ditto');
    });
  });
});
