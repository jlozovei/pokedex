import styled from 'styled-components';

import { StyledContainer } from 'containers/Container/styled';

import { colors } from 'assets/styled/tokens';

export const StyledHeader = styled.header`
  background-color: ${colors.navy};
  padding: 1rem;

  ${StyledContainer} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  color: ${colors.yellow};

  img {
    max-width: 6rem;
    margin: 0 0.5rem;
  }

  span {
    font-size: 1.875rem;
  }
`;

export const StyledNav = styled.nav`
  ul {
    li {
      display: inline-block;

      & + li {
        margin-left: 1rem;
      }
    }
  }

  a {
    position: relative;
    font-weight: 600;
    color: ${colors.yellow};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.4px;

    &:after {
      position: absolute;
      bottom: -0.375rem;
      right: 0;
      display: block;
      width: 0;
      height: 0.125rem;
      background-color: ${colors.white};
      content: '';
      transition: all ease-in-out 210ms;
    }

    &:hover {
      &:after {
        left: 0;
        width: 100%;
      }
    }

    &.active {
      &:after {
        width: 100%;
        background-color: ${colors.yellow};
      }
    }
  }
`;
