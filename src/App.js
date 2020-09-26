import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import FlexboxPage from './pages/FlexboxPage'
import GridPage from './pages/GridPage'
import TodoPage from './pages/TodoPage'
import TodoContext from './js/todoContext'

function App() {
  const [todos, setTodos] = React.useState([])

  const contextValue = {
    todos,
    addTodo: () => {
      console.log('duh')
    },

    loadTodos: async () => {
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=20'

      const res = await axios.get(url)

      setTodos(res.data)
    },
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
