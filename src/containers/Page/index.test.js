import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Page } from 'containers/Page';

describe('containers/Page', () => {
  it('renders with default children', () => {
    render(
      <Router>
        <Page />
      </Router>
    );

    expect(screen.getByTestId('page-text')).toHaveTextContent('This is a page');
  });

  it('renders with custom children', () => {
    render(
      <Router>
        <Page>
          <h1>I'm a page</h1>
        </Page>
      </Router>
    );

    expect(screen.getByRole('heading')).toHaveTextContent("I'm a page");
  });
});
