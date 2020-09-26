import React from 'react'
import { v4 } from 'uuid'
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
    setTodos(todoArray)
  }

  const contextValue = {
    todos,

    addTodo: (title) => {
      const record = { id: v4(), title, userId: 1, completed: false }

      saveTodos([...todos, record])
    },

    toggleComplete: (id) => {
      const newTodos = todos.map((i) => {
        if (i.id === id) {
          id.completed = !id.completed
        }

        return id
      })

      saveTodos(newTodos)
    },

    deleteTodo: (id) => {
      const newTodos = todos.filter((i) => {
        if (i.id === id) {
          return false
        }

        return true
      })

      saveTodos(newTodos)
    },

    loadTodos: async () => {
      const newTodos = await loadFromLocalStorage('todos')
      console.log(newTodos)

      if (newTodos !== undefined && newTodos !== null) {
        saveTodos(newTodos)
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
