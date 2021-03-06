import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'containers/Container';

import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://github.com/jlozovei/pokedex">GitHub</a>
          </li>
        </ul>

        <p data-testid="footer-text">
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          and ReactJS by{' '}
          <a href="https://jlozovei.dev" target="_blank" rel="noopener noreferrer">
            jlozovei
          </a>{' '}
          | {new Date().getFullYear()}
        </p>
      </Container>
    </StyledFooter>
  );
};

export { Footer };
