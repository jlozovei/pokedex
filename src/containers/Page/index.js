import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'containers/Container';

const Page = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Page };

Page.defaultProps = {
  children: <p data-testid="page-text">This is a page</p>
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};
