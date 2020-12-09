import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'containers/Container';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { StyledPage } from './styled';

const Page = ({ children, fluid, header, footer }) => {
  return (
    <StyledPage fluid={fluid}>
      {header && <Header />}
      <Container>{children}</Container>
      {footer && <Footer />}
    </StyledPage>
  );
};

export { Page };

Page.defaultProps = {
  children: <p data-testid="page-text">This is a page</p>,
  fluid: false,
  header: true,
  footer: true
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  header: PropTypes.bool,
  footer: PropTypes.bool
};
