import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray[900]};
  color: #fff;
  `;

export const Content = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 24px;
`;

export const Navbar = styled.nav`
  a {
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    padding: 0 16px;
  }

  ul {
    list-style: none;
    display: flex;
  }
`;
