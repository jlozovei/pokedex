import React from 'react';
import { render, screen } from '@testing-library/react';

import { Container } from 'containers/Container';

describe('containers/Container', () => {
  it('renders with default children', () => {
    render(<Container />);

    expect(screen.getByTestId('container-text')).toHaveTextContent('This is a container');
  });

  it('renders with custom children', () => {
    render(
      <Container>
        <h1>I'm a container</h1>
      </Container>
    );

    expect(screen.getByRole('heading')).toHaveTextContent("I'm a container");
  });
});
