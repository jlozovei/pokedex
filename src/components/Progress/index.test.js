import React from 'react';
import { render, screen } from '@testing-library/react';

import { Progress } from 'components/Progress';

describe('components/Progress', () => {
  it('renders with default props', () => {
    render(<Progress />);

    expect(screen.getByRole('progressbar')).toHaveTextContent('0%');
    expect(screen.getByTestId('progress-fill')).toHaveTextContent('0');
  });

  it('renders with custom props', () => {
    render(<Progress value={45} max={100} />);

    expect(screen.getByRole('progressbar')).toHaveTextContent('45%');
    expect(screen.getByTestId('progress-fill')).toHaveTextContent('2');
  });
});
