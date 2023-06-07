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
    font-family: ${themes.font.fontPrincipal};
    font-size: 1.5rem;
  }
  
  a{
    text-decoration: none;
    cursor: pointer;
  }
  
  *::-webkit-scrollbar{
    width: 9px;
  }
  *::-webkit-scrollbar-track{
    background-color: ${({theme}) => theme.colorSecondary};
  }
  *::-webkit-scrollbar-thumb{
      background-color: ${({theme}) => theme.colorOfTheEnds};
      border-radius: 10px;
      border: 3px solid ${themes.dark.colorPrimary};
  }
`