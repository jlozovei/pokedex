import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styled';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export { Container };

Container.defaultProps = {
  children: <p data-testid="container-text">This is a container</p>
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};
