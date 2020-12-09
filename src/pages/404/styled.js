import styled, { createGlobalStyle } from 'styled-components';

import { StyledPage } from 'containers/Page/styled';
import { StyledContainer } from 'containers/Container/styled';
import { StyledFooter } from 'components/Footer/styled';

import ash from 'assets/images/ash.jpg';
import { colors, viewports } from 'assets/styled/tokens';

export const StyledBody = createGlobalStyle`
  body {
    background: url(${ash}) no-repeat center/cover;

    .root {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(20, 20, 20, 0.85);
      content: '';
    }

    ${StyledPage} {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;
      justify-content: center;
      flex: 1;
    }

    ${StyledContainer} {
      flex-basis: 100%;
    }

    ${StyledFooter} {
      flex-basis: 100%;
      color: ${colors.white};

      a {
        color: ${colors.yellow};
      }
    }
  }
`;

export const StyledBox = styled.div`
  position: relative;
  max-width: 48rem;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 55px -15px rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(5px) saturate(180%);
  text-align: center;
  color: ${colors.black};

  h1 {
    margin-bottom: 2rem;
  }

  a {
    font-weight: 600;
    color: ${colors.yellow};
  }

  @media screen and (max-width: ${viewports.tablet}) {
    h1 {
      span {
        display: none;
      }

      strong {
        display: block;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media screen and (min-width: ${viewports.tablet}) {
    padding: 4rem;
  }
`;
