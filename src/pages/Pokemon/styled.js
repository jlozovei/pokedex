import styled from 'styled-components';

import { viewports } from 'assets/styled/tokens';

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 4rem 0;

  @media screen and (min-width: ${viewports.tablet}) {
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const StyledColumn = styled.div`
  flex-basis: 100%;
  padding: 1rem 0;

  @media screen and (min-width: ${viewports.tablet}) {
    padding: 0 1rem;

    &:first-child {
      flex-basis: 33.3333333333%;
    }

    &:last-child {
      flex-basis: 66.6666666667%;
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
