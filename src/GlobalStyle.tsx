import { createGlobalStyle, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Avenir;
  }

  body {
    width: 100%;
    max-width: 1440px;
    height: 100dvh;
    background: #000;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
