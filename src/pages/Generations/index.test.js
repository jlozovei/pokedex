import React from 'react';
import { render, act, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'store';
import { getGenerations } from 'services';

import { Generations } from 'pages/Generations';

jest.mock('../../services', () => ({
  getGenerations: jest.fn(() =>
    Promise.resolve({
      data: []
    })
  )
}));

describe('pages/Generations', () => {
  it('renders', async () => {
    render(
      <Provider>
        <Router>
          <Generations />
        </Router>
      </Provider>
    );

    expect(screen.getByTestId('page-title')).toBeInTheDocument();

    await waitFor(() => expect(getGenerations).toHaveBeenCalled());
  });
});
