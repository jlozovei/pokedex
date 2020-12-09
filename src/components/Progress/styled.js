import styled from 'styled-components';
import { darken } from 'polished';

const stats = ['#f34444', '#ff7f0f', '#ffdd57', '#a0e515', '#23cd5e', '#00c2b8'];

export const StyledProgressFill = styled.span`
  display: block;
  height: 100%;
`;

export const StyledProgress = styled.div`
  position: relative;
  min-width: 100%;
  width: 20rem;
  max-width: 100%;
  height: 1.25rem;
  border-radius: 5px;
  background-color: white;
  border: 1px solid ${(props) => (props.stats ? darken(0.1, stats[props.stats]) : stats[0])};
  overflow: hidden;

  &,
  span {
    font-size: 0;
    color: transparent;
  }

  ${StyledProgressFill} {
    width: ${(props) => (props.progress ? props.progress / 2 : 0)}%;
    background-color: ${(props) => (props.stats ? stats[props.stats] : stats[0])};
  }
`;
