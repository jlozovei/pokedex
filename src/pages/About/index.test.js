import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { About } from 'pages/About';

describe('pages/404', () => {
  it('renders', () => {
    const history = createMemoryHistory();
    const route = '/about';
    history.push(route);

    render(
      <Router history={history}>
        <About />
      </Router>
    );

    expect(screen.getByTestId('about-title')).toBeInTheDocument('jlozovei + PokéAPI');
    expect(screen.getByTestId('about-title')).toBeInTheDocument('');
  });
});
