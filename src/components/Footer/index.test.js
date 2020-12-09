import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Footer } from 'components/Footer';

describe('components/Footer', () => {
  it('renders', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer-text')).toBeInTheDocument();
    expect(screen.getByText('jlozovei')).toBeInTheDocument();
  });
});
