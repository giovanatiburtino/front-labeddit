import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 auto;
    border: 1px solid black;
    max-width: 430px;
    min-height: 100vh;
    max-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
