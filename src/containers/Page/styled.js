import styled, { css } from 'styled-components';

import { StyledContainer } from 'containers/Container/styled';

export const StyledPage = styled.div`
  position: relative;

  ${(props) =>
    props.fluid &&
    css`
      & > ${StyledContainer} {
        width: 100%;
        max-width: 100%;
      }
    `}
`;
