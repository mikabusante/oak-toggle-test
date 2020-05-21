import React, { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import TestComponent from "./TestComponent";
import Toggle from "./Toggle";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.body};
    transition: background 0.25s linear;
  }
`;

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Toggle setTheme={setTheme} />
        <TestComponent />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  margin: 5vh 0 0 5vw;
`;
