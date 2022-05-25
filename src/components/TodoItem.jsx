import React, { useContext } from "react";
import styled from "styled-components";
import CrossSvg from "../images/icon-cross.svg";
import CheckSvg from "../images/icon-check.svg";
import { css } from "styled-components";
import { ThemeContext } from "../context/themeContext";

const StyledTodoItem = styled.div`
  width: 100%;
  color: black;
  border-bottom: 1px hsl(233, 11%, 84%) solid;
  


  display: flex;
  align-items: center;

  padding: 1.5rem;

  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }

  

  &:hover {
    .cross-image {
      opacity: 1;
    }    
  }
`;

const StyledTodoText = styled.div`
  color: ${props => props.theme.mainText};
  font-weight: 2rem;
  flex: 1;

  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};

    opacity: ${(props) =>
      props.isCompleted ? 0.5 : 1};
    
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const StyledCircle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
    border-color: hsl(233, 11%, 84%);
  }

  border: ${(props) =>
    props.isActive ? "1px solid hsl(233, 11%, 84%)" : "1px solid black"};

  background-image: ${(props) =>
    props.isActive ? "linear-gradient(to right bottom, hsl(192, 100%, 67%),hsl(280, 87%, 65%))" : "white"};

  position: relative;

  ${(props) => {
    if (props.isActive) {
      return css`
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: url(${CheckSvg});
          background-repeat: no-repeat;
          width: 11px;
          height: 11px;
        }
      `;
    }
  }}
`;

const StyledCrossImage = styled.div`
  background-image: url(${CrossSvg});
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;

  &:hover {
    cursor: pointer;
  }

  opacity: 0;
`;

const TodoItem = ({
  title,
  isActive,
  isCompleted,
  handleCircleClicked,
  handleCrossClicked,
}) => {

  const [theme, setTheme] = useContext(ThemeContext);

  
  return (
    <StyledTodoItem theme={theme}>
      <StyledCircle onClick={() => handleCircleClicked()} isActive={isActive} />
      <StyledTodoText theme={theme} isCompleted={isCompleted}>{title}</StyledTodoText>
      <StyledCrossImage
        className="cross-image"
        onClick={() => handleCrossClicked()}
      />
    </StyledTodoItem>
  );
};

export default TodoItem;
