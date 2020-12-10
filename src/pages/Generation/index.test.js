import React from 'react';
import { render, act, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'store';
import { getGenerationByName } from 'services';

import { Generation } from 'pages/Generation';

jest.mock('../../services', () => ({
  getGenerationByName: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          name: 'generation-i',
          main_region: 'kanto',
          types: [],
          names: [],
          pokemon_species: []
        }
      ]
    })
  )
}));

describe('pages/Generation', () => {
  it('renders and get generation base info', async () => {
    render(
      <Provider>
        <Router>
          <Generation />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Generation Info')).toBeInTheDocument();
    expect(screen.getByText('Generation Species')).toBeInTheDocument();

    await waitFor(() => {
      expect(getGenerationByName).toHaveBeenCalled();
    });
  });
});
