import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 8px;
  margin-top: 24px;

  transition: 300ms;

  div#pass {
    grid-column: 1 / 2;
  }

  div#confirm-pass {
    grid-column: 2 / 3;
  }

  @media (max-width: 500px) {
    grid-template-columns: 2fr;

    div#pass,
    div#confirm-pass {
      grid-column: 1 / 2;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
`;
