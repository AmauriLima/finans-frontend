import styled from 'styled-components';

export const Container = styled.div`
  grid-column: 1 / 3;

  & + & {
    margin-top: 16px;
  }

  &#pass {
    grid-column: 1 / 2;
  }

  &#confirm-pass {
    grid-column: 2 / 3;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
    text-align: center;
  }
`;
