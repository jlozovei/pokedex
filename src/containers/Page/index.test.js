import React from 'react';
import { render, screen } from '@testing-library/react';

import { Page } from 'containers/Page';

describe('containers/Page', () => {
  it('renders with default children', () => {
    render(<Page />);

    expect(screen.getByTestId('page-text')).toHaveTextContent('This is a page');
  });

  it('renders with custom children', () => {
    render(
      <Page>
        <h1>I'm a page</h1>
      </Page>
    );

    expect(screen.getByRole('heading')).toHaveTextContent("I'm a page");
  });
});
