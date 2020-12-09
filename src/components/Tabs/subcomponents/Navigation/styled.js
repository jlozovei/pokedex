import styled, { css } from 'styled-components';

import { colors } from 'assets/styled/tokens';

export const StyledNavigation = styled.nav`
  position: relative;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 1px solid ${colors.grey};
`;

export const StyledListItem = styled.li`
  flex: 1 1 auto;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      button {
        border-color: ${colors.grey} ${colors.grey} ${colors.white};
        color: ${colors.navy};
      }
    `}
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  margin-bottom: -1px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 5px 5px 0 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.blue};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
