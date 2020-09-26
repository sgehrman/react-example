import React from 'react'

const ThemeContext = React.createContext({
  todos: [],
  addTodo: () => {},
})

export default ThemeContext
