import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: #fff;

  box-shadow: 0px 5px 10px 0px rgba(38, 38, 38, 0.4);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 24px;

  a, img {
    height: 32px;
  }

  @media (max-width: 400px) {
    a, img {
      height: 24px;
    }
  }
`;
