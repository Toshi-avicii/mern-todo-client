import React, { useState } from 'react';

const TodosContext = React.createContext({
    allTodos: [],
    notCompletedTodos: [],
    activeBtnClicked: false,
    completeBtnClicked: false,
    addTodos: async() => {},
    fetchAllTodos: async() => {},
    fetchNotCompletedTodos: async() => {},
    fetchCompletedTodos: async() => {},
    setCompleteTodo: async() => {},
    setIncompleteTodo: async() => {},
    deleteAllCompletedTodos: async() => {},
});

export const TodosContextProvider = (props) => {
    const [appTodos, setAppTodos] = useState([]);
    const [notCompleted, setNotCompleted] = useState([]);
    const [clicked, setClicked] = useState(false);

    const createTodo = async(inputData) => {
        try { 
          const response = await fetch('http://localhost:5000/api/v1/todos', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ todo: inputData, date: new Date(), completed: false })
          });
  
          const data = await response.json();
          setAppTodos(data);

        } catch(err) {
          console.log(err.message);
        }
    }

    const fetchAll = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/todos');
            const data = await response.json();
            setAppTodos(data);
            let notCompletedTodo = data.filter(item => item.completed !== true);
            setNotCompleted(notCompletedTodo);
        } catch(err) {
            console.log(err.message);
        }   
    }

    const fetchNotCompleted = async() => {
        try { 
          const response = await fetch('http://localhost:5000/api/v1/todos');
          const data = await response.json();

          let notCompletedTodos = data.filter(item => item.completed !== true);
          setClicked(true);
          setNotCompleted(notCompletedTodos);
          setAppTodos(notCompletedTodos);

        } catch(err) {
          console.log(err.message);
        }
    }

    const fetchCompleted = async() => {
        try { 
          const response = await fetch('http://localhost:5000/api/v1/todos');
          const data = await response.json();

          let completedTodos = data.filter(item => item.completed !== false);
          setAppTodos(completedTodos);

        } catch(err) {
          console.log(err.message);
        }
    }

    const completeTodo = async(todoId) => {
        try { 
            const response = await fetch(`http://localhost:5000/api/v1/todos/${todoId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ id: todoId })
            });
            const data = await response.json();
            setClicked(false);
            setAppTodos(data);
  
          } catch(err) {
            console.log(err.message);
          }
    }

    const incompleteTodo = async(todoId) => {
        try { 
            const response = await fetch(`http://localhost:5000/api/v1/todos/${todoId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ id: todoId })
            });
            const data = await response.json();
            setClicked(false);
            setAppTodos(data);
  
          } catch(err) {
            console.log(err.message);
          }
    }

    const deleteTodos = async() => {
        try { 
            const response = await fetch('http://localhost:5000/api/v1/todos', {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              }
            });
            const data = await response.json();
            setClicked(false);
            setAppTodos(data);
  
          } catch(err) {
            console.log(err.message);
          }
    }

    return (
        <TodosContext.Provider value={{ 
            allTodos: appTodos, 
            notCompletedTodos: notCompleted,
            activeBtnClicked: clicked,
            addTodos: createTodo,
            fetchNotCompletedTodos: fetchNotCompleted,
            fetchAllTodos: fetchAll,
            fetchCompletedTodos: fetchCompleted,
            setCompleteTodo: completeTodo,
            setIncompleteTodo: incompleteTodo,
            deleteAllCompletedTodos: deleteTodos
        }}>
            { props.children }
        </TodosContext.Provider>
    )
}

export default TodosContext;