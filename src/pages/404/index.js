import React from 'react';
import { Link } from 'react-router-dom';

import { Page } from 'containers/Page';

import { StyledBody, StyledBox } from './styled';

const Page404 = () => {
  return (
    <Page header={false}>
      <StyledBody />

      <StyledBox>
        <h1>
          <strong>404</strong>
          <span> - </span>Pokémon not found
        </h1>
        <p>Looks like the Pokémon you're searching doesn't exists, and Ash is mad about it.</p>
        <p>
          Use the search box on the{' '}
          <Link data-testid="404-link" to="/">
            home page
          </Link>{' '}
          to search for your Pokémon!
        </p>
      </StyledBox>
    </Page>
  );
};

export { Page404 };
