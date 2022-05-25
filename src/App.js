import "./App.scss";
import styled from "styled-components";

import TodoListContainer from "./components/TodoListContainer";
import React, { useState } from "react";
import { ThemeContext, themes } from "./context/themeContext.js";



const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.mainBackground};
`

const StyledImageHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${props => props.theme.mainBackgroundImage});
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  background-size: cover;

  @media only screen and (max-width: 796px) {
    background-image: url(${props => props.theme.mainBackgroundImageMobile});
  }
`;

function App() {
  
  const [theme, setTheme] = useState(themes.light)
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <StyledApp theme={theme} className="App">
        <StyledImageHeader theme={theme} />
        <TodoListContainer />
      </StyledApp >
    </ThemeContext.Provider>
  );
}

export default App;
