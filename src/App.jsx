import { useState, useContext } from 'react';
import './App.css'
import styled from 'styled-components';
import moonImg from './public/icon-moon.svg';
import sunImg from './public/icon-sun.svg';
import List from './components/List';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import ActionBox from './components/ActionBox';
import TodosContext from './context/appContext';
import { motion } from 'framer-motion';

function App() {
  const ctx = useContext(TodosContext);

  const [inputState, setInputState] = useState('');
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const formHandler = (e) => {
    e.preventDefault();
    ctx.addTodos(inputState); 
    setInputState('');
  }

  const inputHandler = (e) => {
    setInputState(e.target.value);
  }

  const svgVariants = {
    hidden: {
      rotate: -180
    },
    visible: { rotate: 0 },
    transtion: { duration: 1 }
  }

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0, fill: "#000" },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 2, ease: "easeInOut" }, fill: "#fff" }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <div className="App">
          <Box className="bg-box">
            <div className="app-box">
              <div className="box">
                <h1>todo</h1>
                {theme === "dark" ? 
                  <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" onClick={themeToggler} width="26" height="26">
                    <motion.path variants={pathVariants} fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>
                  </motion.svg> :
                  <motion.svg variants={svgVariants} initial="hidden" animate="visible" xmlns="http://www.w3.org/2000/svg" onClick={themeToggler} width="26" height="26">
                    <motion.path variants={pathVariants} fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>
                  </motion.svg>
                }
                {/* <img src={theme === 'light' ? moonImg : sunImg } alt="icon" onClick={themeToggler} /> */}
              </div>
              <form onSubmit={formHandler} className="add">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Create a new todo" onChange={inputHandler} value={inputState} />
                </form>
            </div>
          </Box>

        <div className="todo-list">
          <List />
          <ActionBox />
        </div>
      </div>
    </ThemeProvider>
  )
}

const Box = styled.div``

export default App
