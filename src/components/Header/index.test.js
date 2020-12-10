import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from 'components/Header';

describe('components/Header', () => {
  it('renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByAltText('jlozovei')).toBeInTheDocument();
    expect(screen.getByAltText('PokéAPI')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
