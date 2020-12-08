import styled from 'styled-components';

import { colors } from 'assets/styled/tokens';

const stats = ['#f34444', '#ff7f0f', '#ffdd57', '#a0e515', '#23cd5e', '#00c2b8'];

export const StyledProgress = styled.div`
  position: relative;
  width: 20rem;
  max-width: 100%;
  height: 1rem;
  border-radius: 5px;
  background-color: white;
  border: 1px solid ${colors.grey};
  overflow: hidden;

  &,
  span {
    font-size: 0;
    color: transparent;
  }
`;

export const StyledProgressFill = styled.span`
  display: block;
  width: ${(props) => (props.progress ? props.progress / 2 : 0)}%;
  height: 100%;
  background-color: ${(props) => (props.stats ? stats[props.stats] : stats[0])};
`;
