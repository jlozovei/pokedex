import styled from 'styled-components';

import { colors, viewports } from 'assets/styled/tokens';
import { StyledLoader } from 'components/Loader/styled';

export const StyledListContainer = styled.div`
  padding: 4rem 0;
  text-align: center;

  ${StyledLoader} {
    margin: 4rem auto;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: flex-start;
    margin: 2rem 0 -0.5rem;

    li {
      flex-basis: 50%;
      padding: 0.5rem;

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
  }

  @media screen and (min-width: ${viewports.tablet}) {
    ul {
      li {
        flex-basis: 25%;
      }
    }
  }
`;
