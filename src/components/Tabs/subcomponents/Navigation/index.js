import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavigation, StyledList, StyledListItem, StyledButton } from './styled';

const Navigation = ({ items }) => {
  return (
    <StyledNavigation>
      <StyledList>
        {items.map(({ label, onClick, active }, index) => (
          <StyledListItem active={active} key={index}>
            <StyledButton onClick={() => onClick()}>{label}</StyledButton>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledNavigation>
  );
};

export { Navigation };

Navigation.defaultProps = {
  items: [
    { label: 'Item #1 ', active: true },
    { label: 'Item #2 ', active: false }
  ]
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    })
  )
};
