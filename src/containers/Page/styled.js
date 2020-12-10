import styled, { css } from 'styled-components';

import { StyledContainer } from 'containers/Container/styled';

export const StyledPage = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;

  ${(props) =>
    props.fluid &&
    css`
      & > ${StyledContainer} {
        width: 100%;
        max-width: 100%;
      }
    `}
`;
