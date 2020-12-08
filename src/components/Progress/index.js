import React from 'react';
import PropTypes from 'prop-types';

import { StyledProgress, StyledProgressFill } from './styled';

const Progress = ({ value, min, max }) => {
  const getStats = (value) => {
    return Math.floor((value / max) * 6);
  };

  return (
    <StyledProgress
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      progress={value}
      stats={getStats(value)}
    >
      <StyledProgressFill data-testid="progress-fill">{getStats(value)}</StyledProgressFill>
      {value}%
    </StyledProgress>
  );
};

export { Progress };

Progress.defaultProps = {
  value: 0,
  min: 0,
  max: 200
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};
