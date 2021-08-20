import styled from 'styled-components';

export const Container = styled.div`

  max-height: 460px;
  width: 500px;
  padding: 8px;
  position: relative;

  overflow-y: scroll;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 16px 20px;
  border-radius: 8px;
  background: #fff;

  box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);

  & + & {
    margin-top: 16px;
  }

  .description {
    font-size: 14px;
  }

  strong {
    font-size: 15px;
    margin-top: 8px;
    display: inline-block;
  }

  &.withdraw {
    .description {
      color: ${({ theme }) => theme.colors.danger.dark};
    }

    strong {
      color: ${({ theme }) => theme.colors.danger.main};
    }
  }

  &.deposit {
    .description {
      color: ${({ theme }) => theme.colors.secondary.dark};
    }

    strong {
      color: ${({ theme }) => theme.colors.secondary.main};
    }
  }

  button {
    background: transparent;
    border: none;
    padding: 4px;
  }
`;
