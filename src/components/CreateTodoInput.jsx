import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

const StyledCreateTodoContainer = styled.div`
  position: relative;
`;

const StyledCreateTodoInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-bottom: 2px black solid;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  font-size: 1.25rem;
  padding-left: 4.3rem;
  
  color: ${props => props.theme.mainText};

  border: none;

  background-color: ${props => props.theme.todoListBackground};

  
`;

const StyledCircle = styled.div`
  position: absolute;

  top: 50%;
  left: 1.4rem;

  transform: translate(0, -100%);
    
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px black solid;


  &:hover {
    cursor: pointer;
    border-color: hsl(233, 11%, 84%);
  }
`;

const CreateTodoInput = ({ newTodo, handleInputChanged, handleCreateTodoClicked }) => {

  const [theme, setTheme] = useContext(ThemeContext)
  
  return (
    <StyledCreateTodoContainer>
      <StyledCreateTodoInput
        theme={theme}
        type="text"
        value={newTodo}
        onChange={(event) => handleInputChanged(event)}
      />
      <StyledCircle onClick={() => handleCreateTodoClicked()}/>
    </StyledCreateTodoContainer>
  );
};

export default CreateTodoInput;
