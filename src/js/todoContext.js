import React from 'react'

const ThemeContext = React.createContext({
  todos: [],
  addTodo: (title) => {},
  loadTodos: async () => {},
  deleteTodo: (id) => {},
})

export default ThemeContext
