import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledPane } from './styled';

const Pane = ({ active, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(active);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(active);
    }, 1);
  }, [active]);

  return (
    <StyledPane active={active} visible={isVisible} {...props}>
      {children}
    </StyledPane>
  );
};

export { Pane };

Pane.defaultProps = {
  active: false,
  children: <p data-testid="pane-text">This is a TabPane</p>
};

Pane.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
