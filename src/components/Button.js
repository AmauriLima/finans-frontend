import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 42px;
  width: 80%;

  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  appearance: none;
  border: none;
  text-transform: uppercase;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.primary.main};

  transition: all 200ms ease-in;

  ${({ disabled }) => !disabled && css`
    &:hover {
      transform: translateY(-2px);
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  `}

  &[disabled] {
    background: #363636;
    cursor: not-allowed;
  }
`;
