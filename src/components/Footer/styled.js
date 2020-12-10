import styled from 'styled-components';

import { StyledContainer } from 'containers/Container/styled';

import { colors, viewports } from 'assets/styled/tokens';

export const StyledFooter = styled.footer`
  flex-basis: 100%;
  margin-top: auto;
  padding-bottom: 2rem;

  ${StyledContainer} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding-top: 2rem;
    border-top: 1px solid ${colors.grey};
  }

  p {
    text-align: right;
  }

  a {
    color: ${colors.blue};
  }

  ul {
    margin: 0 -0.5rem 1rem;

    li {
      display: inline-block;
      padding: 0 0.5rem;
    }
  }

  @media screen and (min-width: ${viewports.mobile}) {
    ${StyledContainer} {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;
    }
    ul {
      margin-bottom: 0;
    }
  }
`;
