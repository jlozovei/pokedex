import styled from 'styled-components';

import { colors, viewports } from 'assets/styled/tokens';
import { StyledLoader } from 'components/Loader/styled';

export const StyledPane = styled.div`
  display: none;
  padding: 1rem;
  border: 1px solid ${colors.grey};
  border-top: none;
  border-radius: 0 0 5px 5px;
  opacity: 0;
  visiblity: hidden;
  transition: opacity ease-in-out 200ms;

  @media screen and (min-width: ${viewports.tablet}) {
    padding: 2rem;
  }

  ${(props) =>
    props.active &&
    `
    display: block;
    `}

  ${(props) =>
    props.visible &&
    `opacity: 1;
    visiblity: visible;`}

  ${StyledLoader} {
    margin: 4rem auto;
  }
`;
