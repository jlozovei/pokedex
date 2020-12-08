import styled, { css } from 'styled-components';

import { colors } from 'assets/styled/tokens';

export const StyledResponsiveTable = styled.div`
  overflow-x: auto;

  table {
    td {
      padding: 0.25rem;
    }

    tr {
      border-top: 1px solid ${colors.grey};

      &:last-child {
        border-bottom: 1px solid ${colors.grey};
      }
    }

    td {
      &:first-child {
        font-weight: 600;
      }

      &.numeric {
        text-align: right;
      }
    }
  }
`;
