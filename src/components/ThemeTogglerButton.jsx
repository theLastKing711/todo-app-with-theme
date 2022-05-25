import React, { useContext } from "react";
import { ThemeContext, themes } from "../context/themeContext";
import styled from "styled-components";

const StyledTodoInputSvg = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const ThemeTogglerButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  console.log("context", theme);

  return (
    <StyledTodoInputSvg
      image={theme.backgroundImage}
      onClick={() => setTheme(state => state === themes.dark ? themes.light : themes.dark )}
    />
  );
};

export default ThemeTogglerButton;
