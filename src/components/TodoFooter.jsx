import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

const StyledTodoFooterDesktop = styled.div`
  width: 100%;
  color: black;
  background-color: ${(props) => props.theme.todoListBackground};
  display: flex;
  justify-content: space-between;

  padding: 1.25rem;

  border-radius: 0 0 5px 5px;
`;

const StyledTodoListSelectedDesktop = styled.ul`

  display: none;
  
  @media only screen and (min-width: 633px) {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    > li {
      :not(:last-of-type) {
        margin-right: 1.2rem;
      }

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;

const StyledFilterItem = styled.li`
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  color: ${(props) => (props.isActive ? "blue" : "gray")};
`;

const StyledTodoListActions = styled.ul`
  
    display: flex;
    color: gray;

    p {
      &:hover {
        cursor: pointer;
      }

      :not(:last-of-type) {
        margin-right: 0.5rem;
      }
    }
`;

const StyledTodoListSelectedMobile = styled.ul`

  display: none;
  
  @media only screen and (max-width: 633px) {

    margin-top: 1rem;

    padding: 1rem;

    border-radius: 5px;
    
    background-color: ${(props) => props.theme.todoListBackground};
    
    display: flex;
    justify-content: center;
    color: gray;

    list-style: none;
    gap: 2rem;

    > li {
      font-size: 1.2rem;
      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    
  }
`;

const TodoFooter = ({
  filterdOptions,
  todoFilter,
  itemsCount,
  handleActiveTodosSelected,
  handleCompletedClicked,
  handleClearClicked,
}) => {
  const filterItemIsActive = (filterIndex, item) => {
    return filterIndex == item ? true : false;
  };

  const filterdOptionsList = filterdOptions.map((item, index) => {
    return (
      <StyledFilterItem
        key={index}
        isActive={filterItemIsActive(item, todoFilter)}
        onClick={() => handleActiveTodosSelected(item)}
      >
        {item}
      </StyledFilterItem>
    );
  });

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="footer">
      <StyledTodoFooterDesktop theme={theme}>
        <div className="items-count" style={{ color: "gray" }}>
          {itemsCount} items left
        </div>
        <StyledTodoListSelectedDesktop>{filterdOptionsList}</StyledTodoListSelectedDesktop>
        <StyledTodoListActions>
          <p onClick={() => handleClearClicked()}>Clear</p>
          <p onClick={() => handleCompletedClicked()}>Completed</p>
        </StyledTodoListActions>
      </StyledTodoFooterDesktop>
      <StyledTodoListSelectedMobile theme={theme}>
        {filterdOptionsList}
      </StyledTodoListSelectedMobile>
    </div>
  );
};

export default TodoFooter;
