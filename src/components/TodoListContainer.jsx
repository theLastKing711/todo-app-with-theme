import React, { useContext, useState } from "react";
import styled from "styled-components";
import CreateTodoInput from "./CreateTodoInput";
import SunSvg from "../images/icon-sun.svg";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { ThemeContext } from "../context/themeContext";

const StyledTodoListContainer = styled.div`
  position: relative;
  width: min(90%, 35rem);
  z-index: 2;
  border-radius: 10px;
  margin-top: 150px;
`;

const StyledTodoInputHeader = styled.div`
  position: absolute;
  top: -6rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledTodoInputTitle = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;


const StyledTodoItemsContainer = styled.div`

    max-height: 50vh;
    overflow-y: auto;

     > div {
        background-color: ${props => props.theme.todoListBackground};
     }

    
}
`;

const todoListItems = [
  {
    id: 1,
    title: "Complete online javascript course",
    isActive: false,
    isCompleted: false,
  },
  { id: 2, title: "Jog around the park", isActive: false, isCompleted: false },
  { id: 3, title: "Read for one hour", isActive: false, isCompleted: false },
  { id: 4, title: "Pick up groceries", isActive: false, isCompleted: false },
  {
    id: 5,
    title: "Complete Todo App on Frontend Mentor",
    isActive: false,
    isCompleted: false,
  },
];

const filterdOptions = ["All", "Active", "Completed"];

const TodoListContainer = () => {
  const [todoList, setTodoList] = useState(todoListItems);

  const [newTodo, setNewTodo] = useState("");

  const [todoFilter, setTodoFilter] = useState("All");

  const handleInputChanged = (event) => {
    console.log("event", event);
    setNewTodo(event.target.value);
  };

  const handleCreateTodoClicked = () => {
    console.log("ada");

    const biggestId = Math.max(...todoList.map((item) => item.id));

    const tempTodoList = [
      ...todoList,
      {
        id: biggestId + 1,
        title: newTodo,
        isActive: false,
        isCompleted: false,
      },
    ];

    setTodoList(tempTodoList);
    setNewTodo("");
  };

  const handleCircleClicked = (id) => {
    const tempTodoList = todoList.map((item) => {
      return id == item.id
        ? { ...item, isActive: !item.isActive }
        : { ...item };
    });

    setTodoList(tempTodoList);
  };

  const handleCrossClicked = (id) => {
    const tempTodoList = todoList.filter((item) => item.id != id);

    setTodoList(tempTodoList);
  };

  const handleActiveTodosSelected = (option) => {
    setTodoFilter(option);
  };

  const handleCompletedClicked = () => {
    const tempTodoList = todoList.map((item) => {
      return item.isActive
        ? { ...item, isCompleted: true, isActive: false }
        : { ...item };
    });

    setTodoList(tempTodoList);
  };

  const handleClearClicked = () => {
    const tempTodoList = todoList.map((item) => {
      return item.isActive
        ? { ...item, isCompleted: false, isActive: false }
        : { ...item };
    });

    setTodoList(tempTodoList);
  };

  let filterdTodos = [];

  switch (todoFilter) {
    case "All":
      filterdTodos = [...todoList];
      break;

    case "Active":
      filterdTodos = todoList.filter((item) => item.isActive == true);
      console.log("filterd Todos", filterdTodos);
      break;

    case "Completed":
      filterdTodos = todoList.filter((item) => item.isCompleted == true);
      break;

    default:
      filterdTodos = [...todoList];
  }

  const itemsCount =
    todoList.length -
    todoList.filter((item) => item.isCompleted == true).length;

  const todos = filterdTodos.map((item) => {
    return (
      <TodoItem
        key={item.id}
        title={item.title}
        isActive={item.isActive}
        isCompleted={item.isCompleted}
        handleCircleClicked={() => handleCircleClicked(item.id)}
        handleCrossClicked={() => handleCrossClicked(item.id)}
      />
    );
  });

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <StyledTodoListContainer theme={theme}>
      <StyledTodoInputHeader>
        <StyledTodoInputTitle>TODO</StyledTodoInputTitle>
        <ThemeTogglerButton />
      </StyledTodoInputHeader>
      <CreateTodoInput
        newTodo={newTodo}
        handleInputChanged={(event) => handleInputChanged(event)}
        handleCreateTodoClicked={() => handleCreateTodoClicked()}
      />
      <StyledTodoItemsContainer theme={theme}>{todos}</StyledTodoItemsContainer>
      <TodoFooter
        handleActiveTodosSelected={(option) =>
          handleActiveTodosSelected(option)
        }
        handleCompletedClicked={() => handleCompletedClicked()}
        handleClearClicked={() => handleClearClicked()}
        filterdOptions={filterdOptions}
        todoFilter={todoFilter}
        itemsCount={itemsCount}
      />
    </StyledTodoListContainer>
  );
};

export default TodoListContainer;
