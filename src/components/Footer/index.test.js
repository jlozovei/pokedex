import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer } from 'components/Footer';

describe('components/Footer', () => {
  it('renders', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByText('jlozovei')).toBeInTheDocument();

    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
