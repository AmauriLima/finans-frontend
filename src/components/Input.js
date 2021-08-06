import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;

  background: transparent;
  border: none;
  outline: none;

  color: white;
  text-align: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};

  transition: all 200ms ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }


  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
    color: ${theme.colors.danger.main};
  `}
`;
