import styled from 'styled-components';

import { StyledContainer } from 'containers/Container/styled';

import { colors } from 'assets/styled/tokens';

export const StyledFooter = styled.footer`
  margin-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;

  ${StyledContainer} {
    padding-top: 1rem;
    border-top: 1px solid ${colors.grey};
  }

  a {
    color: ${colors.blue};
  }
`;
