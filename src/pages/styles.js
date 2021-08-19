import styled from 'styled-components';

export const Container = styled.div`
  max-width: 540px;
  min-width: 360px;
  padding: 32px;
  border-radius: 8px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.gray[900]};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 38px;

    .gradient, &.gradient {
      font-weight: 700;
      line-height: normal !important;
    }

    &.titleForm {
      text-align: center;
    }
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.colors.gray[100]};
  }

  @media (max-width: 580px) {
    width: 90%;
    margin: 0 auto;
    h1 {
      font-size: 30px;
      line-height: 28px;
    }

    h1.titleForm {
      font-size: 36px;
    }
  }

  @media (max-width: 460px) {
    h1 {
      font-size: 24px;
      line-height: 22px;
    }
  }

  @media (max-width: 380px) {
    min-width: 300px;
  }

`;

export const ButtonsArea = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: space-around;

  &.formPage {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    p {
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: .5px;
    }

    button {
      height: 42px;
      font-size: 18px;
    }
  }

  button {
    height: 58px;
    padding: 0 24px;
    font-size: 24px;
    text-transform: capitalize;
    border-radius: 16px;
    background-color: rgba(38, 38, 38);
    color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, .3);

    &:hover {
      background-color: rgba(38, 38, 38, .97);
    }

    &:active {
      background-color: #181818;
    }


    @media (max-width: 460px) {
      font-size: 18px;
    }
  }

  a, button {
    text-align: center;
    width: max-content;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;

    a:first-child {
      margin-bottom: 16px;
    }

    a, button {
      width: 80%;
    }

    button {
      padding: 0;
    }
  }
`;
