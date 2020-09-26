import React from 'react'
import { v4 } from 'uuid'
import axios from 'axios'
import localforage from 'localforage'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import FlexboxPage from './pages/FlexboxPage'
import GridPage from './pages/GridPage'
import TodoPage from './pages/TodoPage'
import TodoContext from './js/todoContext'

function App() {
  const [todos, setTodos] = React.useState([])

  const saveTodos = (todoArray) => {
    saveToLocalStorage('todos', todoArray)
    setTodos(todos)
  }

  const contextValue = {
    todos,

    addTodo: (title) => {
      const record = { id: v4(), title, userId: 1, completed: false }

      saveTodos({ ...todos, record })
    },

    deleteTodo: (id) => {
      const newTodos = todos.filter((i) => {
        if (i.id === id) {
          return false
        }

        return false
      })

      saveTodos(newTodos)
    },

    loadTodos: async () => {
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=20'

      const res = await axios.get(url)
      if (res !== null) {
        saveTodos(res.data)
      }
    },
  }

  const loadFromLocalStorage = async (key) => {
    let value

    try {
      value = await localforage.getItem(key)
    } catch (err) {
      console.log(err)
    }

    return value
  }

  const saveToLocalStorage = async (key, value) => {
    try {
      localforage.setItem(key, value)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <TodoContext.Provider value={contextValue}>
      <div style={appStyles}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={FlexboxPage} />
          <Route path="/grid" component={GridPage} />
          <Route path="/todo" component={TodoPage} />
        </BrowserRouter>
      </div>
    </TodoContext.Provider>
  )
}

const appStyles = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
}

export default App
