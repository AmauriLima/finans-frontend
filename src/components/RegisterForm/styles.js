import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 8px;
  margin-top: 24px;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
`;
