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

  a, img {
    height: 32px;
  }

  @media (max-width: 400px) {
    a, img {
      height: 24px;
    }
  }
`;

export const Navbar = styled.nav`
  a {
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;

    transition: all 200ms ease-in;

    &:hover {
      opacity: .7;
    }

    &:active {
      opacity: 1;
    }
  }

  ul {
    list-style: none;
    display: flex;

    li:first-child {
        margin-right: 32px;
      }
  }

  @media (max-width: 400px) {
    ul {
      li:first-child {
        margin-right: 16px;
      }
    }
  }
`;
