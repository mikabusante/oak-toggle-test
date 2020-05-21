import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils";

import Toggle from "./Toggle";
import TestComponent from "./TestComponent";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
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
