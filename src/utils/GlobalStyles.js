import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 8vh 0 0 5vw;
    background: ${(props) => props.theme.body};
    font-family: 'Karla';
    color: ${(props) => props.theme.text}; 
  }
`;
