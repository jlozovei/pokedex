import React from 'react';
import PropTypes from 'prop-types';

import { StyledResponsiveTable } from './styled';

const ResponsiveTable = ({ children }) => {
  return <StyledResponsiveTable>{children}</StyledResponsiveTable>;
};

export { ResponsiveTable };

ResponsiveTable.defaultProps = {
  children: <p data-testid="table-text">This is a responsive table</p>
};

ResponsiveTable.propTypes = {
  children: PropTypes.node.isRequired
};
