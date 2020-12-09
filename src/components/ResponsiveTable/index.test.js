import React from 'react';
import { render, screen } from '@testing-library/react';

import { ResponsiveTable } from 'components/ResponsiveTable';

describe('components/ResponsiveTable', () => {
  it('renders with default children', () => {
    render(<ResponsiveTable />);

    expect(screen.getByTestId('table-text')).toHaveTextContent('This is a responsive table');
  });

  it('renders with custom children', () => {
    render(
      <ResponsiveTable>
        <h1>I'm a ResponsiveTable</h1>
      </ResponsiveTable>
    );

    expect(screen.getByRole('heading')).toHaveTextContent("I'm a ResponsiveTable");
  });
});
