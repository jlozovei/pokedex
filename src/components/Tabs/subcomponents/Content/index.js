import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export { Content };

Content.defaultProps = {
  children: <p data-testid="content-text">This is a tab content</p>
};

Content.propTypes = {
  children: PropTypes.node.isRequired
};
