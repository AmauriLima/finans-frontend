import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  * {
    &::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #222;
    }

    &::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: #ccc;
    }
  }



  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }

  .gradient {
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => css`
        ${theme.colors.primary.main},
        ${theme.colors.secondary.main}
      `}
    );
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;
  }
`;
