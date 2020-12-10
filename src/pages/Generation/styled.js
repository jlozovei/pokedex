import styled, { createGlobalStyle } from 'styled-components';

import { colors, viewports } from 'assets/styled/tokens';
import { StyledPage } from 'containers/Page/styled';
import { StyledContainer } from 'containers/Container/styled';

export const StyledBody = createGlobalStyle`
  h1 {
    margin-bottom: 2rem;
  }

  ${StyledPage} { 
    & > ${StyledContainer} {
      padding: 4rem 0;
    }
  }
`;

export const StyledInfoGroup = styled.div`
  & + div {
    margin-top: 2rem;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: flex-start;

    li {
      flex-basis: 100%;
      list-style: disc inside;
    }
  }

  ol {
    li {
      list-style: decimal inside;

      &.hidden {
        opacity: 0;
        visibility: hidden;
        transition: all ease-in-out 200ms;
      }
    }

    &:hover {
      .hidden {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${viewports.tablet}) {
    ul {
      li {
        flex-basis: 50%;
      }
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: flex-start;
  margin: 2rem 0 -0.5rem;

  li {
    flex-basis: 50%;
    padding: 0.5rem;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      aling-items: center;
      justify-content: center;
      height: 100%;
      padding: 1rem;
      border: 1px solid ${colors.grey};
      border-radius: 5px;
      font-weight: 600;
      color: ${colors.blue};
      text-decoration: none;
      transition: all ease-in-out 200ms;

      &:hover {
        box-shadow: 0 0 25px -12px rgba(40, 40, 40, 0.5);
        transform: translateY(-0.125rem);
      }
    }

    img {
      flex: 1;
      max-height: 12rem;
      max-width: 8rem;
      margin: 0 auto 1rem;
    }
  }

  @media screen and (min-width: ${viewports.tablet}) {
    li {
      flex-basis: 25%;
    }
  }
`;
