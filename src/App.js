import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils";

import Toggle from "./Toggle";
import Collection from "./Collection";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Wrapper>
        <Toggle setTheme={setTheme} />
        <div>
          <Collection
            imgUrl="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="donuts with fruits and flowers"
            title="Baking"
            count="222"
          />
          <Collection
            imgUrl="https://www.hithaonthego.com/wp-content/uploads/2018/03/Book-Review-Pachinko-by-Min-Jin-Lee.jpg"
            alt="hand holding book Pachinko by Min Jin Lee"
            title="Book Club"
            count="38"
          />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  margin: 8vh 0 0 5vw;

  > div {
    display: flex;
  }
`;
