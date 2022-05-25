import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../context/themeContext';

const StyledTodoListActionsMobile= styled.ul`


  @media only screen and (max-width: 634px) {
    
    margin-top: 1rem;

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
    
  }
  
`;


const TodoFooterActionsMobile = () => {

    const [theme, useTheme] = useContext(ThemeContext)
    
    return (
        <StyledTodoListActionsMobile theme={theme}>
            
        </StyledTodoListActionsMobile>
    )
}

export default TodoFooterActionsMobile
