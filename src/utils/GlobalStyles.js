import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    transition: background 0.25s linear;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-family: 'Karla'
  }
`;
