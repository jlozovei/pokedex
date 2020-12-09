import React from 'react';

import { Container } from 'containers/Container';

import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p data-testid="footer-text">
          Made with <span aria-label="love">❤️</span> by{' '}
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
