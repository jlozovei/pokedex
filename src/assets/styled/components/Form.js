import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { colors } from 'assets/styled/tokens';
import { StyledLoader } from 'components/Loader/styled';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
  max-width: 48rem;
  margin: 0 auto;

  label {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  }

  input {
    flex-basis: 80%;
  }

  button {
    flex-basis: 20%;
  }

  small {
    flex: 0 0 auto;
    max-width: 100%;
    min-height: 1.375rem;
    margin-top: 0.5rem;
    padding: 0.125rem 0.5rem;
    background-color: ${colors.red};
    border-radius: 5px;
    font-weight: 600;
    color: ${colors.white};
    transition: all ease-in-out 200ms;

    &:empty {
      opacity: 0;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 1rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  transition: all ease-in-out 200ms;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 1px 2px ${colors.blue};
  }
`;

export const StyledSubmit = styled.button`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  color: ${colors.white};
  transition: background-color ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.05, colors.blue)};
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isLoading &&
    `
    color: transparent;
    pointer-events: none;
    background-color: ${lighten(0.2, colors.blue)};
  `}

  ${StyledLoader} {
    position: absolute;
    border-color: ${colors.white} ${colors.white} ${colors.white} ${darken(0.15, colors.grey)};
  }
`;
