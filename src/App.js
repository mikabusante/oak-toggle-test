import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme, GlobalStyles } from "./utils";

import Toggle from "./Toggle";
import Content from "./Content";

function App() {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <Toggle isDark={isDark} setIsDark={setIsDark} />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  > div {
    display: flex;
  }
`;
