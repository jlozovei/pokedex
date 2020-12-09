import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoader } from './styled';

const Loader = ({ size }) => {
  return <StyledLoader size={size}>Loading data...</StyledLoader>;
};

export { Loader };

Loader.defaultProps = {
  size: 'sm'
};

Loader.propTypes = {
  size: PropTypes.string.isRequired
};
