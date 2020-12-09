import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { colors } from 'assets/styled/tokens';

const sizes = {
  xs: '1rem',
  sm: '2rem',
  md: '4rem',
  lg: '8rem'
};

const loadingAnimation = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg); 
  }
`;

export const StyledLoader = styled.span`
  display: block;
  width: ${(props) => (props.size ? sizes[props.size] : sizes.sm)};
  height: ${(props) => (props.size ? sizes[props.size] : sizes.sm)};
  border: ${(props) =>
    props.size ? `calc(${sizes[props.size]} / 16)` : `calc(${sizes.sm} / 16)`} solid ${lighten(
  0.15,
  colors.blue
)};
  border-left-color ${colors.navy};
  border-radius: 50%;
  font-size: 0;
  color: transparent;
  animation: ${loadingAnimation} 1s linear infinite;
`;
