import styled from 'styled-components';

export const Container = styled.div`
  max-width: 540px;
  min-width: 360px;
  padding: 32px;
  border-radius: 8px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.gray[900]};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

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
`;
