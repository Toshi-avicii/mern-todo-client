import React, { useContext } from 'react';
import styled from 'styled-components';
import TodosContext from '../context/appContext';

function ActionBox() {

    const ctx = useContext(TodosContext);

    const showActiveTodos = (e) => {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            if(btn.classList.contains('active') && !e.target.classList.contains('active')) {
                e.target.classList.add('active');
                btn.classList.remove('active');
            }
        })
        ctx.fetchNotCompletedTodos();
    }

    const showAllTodos = (e) => {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            if(btn.classList.contains('active') && !e.target.classList.contains('active')) {
                e.target.classList.add('active');
                btn.classList.remove('active');
            }
        })
        ctx.fetchAllTodos();
    }

    const showCompletedTodos = (e) => {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            if(btn.classList.contains('active') && !e.target.classList.contains('active')) {
                e.target.classList.add('active');
                btn.classList.remove('active');
            }
        })
        
        ctx.fetchCompletedTodos();
    }

    const deleteTodos = (e) => {
        e.preventDefault();
        ctx.deleteAllCompletedTodos();
    }

    return (

        <Container className="actions">
            <small>{ctx.notCompletedTodos.length} items left</small>
            <div className="btns">
                <button 
                    className="btn btn-all active" 
                    onClick={showAllTodos}
                >All
                </button>
                <button className="btn btn-active" onClick={showActiveTodos}>Active</button>
                <button className="btn btn-completed" onClick={showCompletedTodos}>Completed</button>
            </div>

            <button className="btn-clear-completed" onClick={deleteTodos}>Clear Completed</button>
        </Container>
    )
}

export default ActionBox;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 45vw;
  margin: auto;
  border-radius: 4px;
  padding: 1rem;
  background-color: ${props => props.theme.formColor};
  font-size: 16px;
  width: 100%;

  small {
      flex: 1;
  }

  .btns {
      flex: 2;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  }

  .btn-all {
      color: ${props => props.theme.fontColor};
      background: none;
      border: none;
      cursor: pointer;
  }

  .active {
    color: var(--bright-blue);
    font-weight: bold;
  }

  .btn-clear-completed {
      flex: 1;
      font-size: 12px;
      cursor: pointer;
  }

  @media screen and (max-width: 576px) {
    min-width: 90vw;
    max-width: 95vw;
  }

`