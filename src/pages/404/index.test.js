import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Page404 } from 'pages/404';

describe('pages/404', () => {
  it('renders', () => {
    render(
      <Router>
        <Page404 />
      </Router>
    );

    const link = screen.getByTestId('404-link');

    expect(screen.getByRole('heading')).toHaveTextContent('404 - Pokémon not found');
    expect(link.href).toBe('http://localhost/');
  });

  it('goes back to home page', () => {
    render(
      <Router>
        <Page404 />
      </Router>
    );

    const link = screen.getByTestId('404-link');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);
    expect(window.location.href).toBe('http://localhost/');
  });
});
