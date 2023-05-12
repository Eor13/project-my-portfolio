import { createGlobalStyle } from "styled-components";
import { themes } from "./services/themeContext";

export const GlobalStyle  =  createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${ themes.fontPrincipal };
    color: ${themes.colorPrincipal};
    // color: ${themes.colorDetails};
    font-size: 1.5rem;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
`