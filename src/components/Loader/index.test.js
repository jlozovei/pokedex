import React from 'react';
import { render, screen } from '@testing-library/react';

import { Loader } from 'components/Loader';

describe('components/Loader', () => {
  it('renders', () => {
    render(<Loader />);

    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });
});
