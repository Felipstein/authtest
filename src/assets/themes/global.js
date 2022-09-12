import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font}
  }

  input, select, button {
    font-family: ${({ theme }) => theme.font};
    font-size: 16px;
  }

`;
