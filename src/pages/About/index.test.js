import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { About } from 'pages/About';

describe('pages/404', () => {
  it('renders', () => {
    render(
      <Router>
        <About />
      </Router>
    );

    expect(screen.getByTestId('about-title')).toBeInTheDocument('jlozovei + PokéAPI');
    expect(screen.getByTestId('about-title')).toBeInTheDocument('');
  });
});
