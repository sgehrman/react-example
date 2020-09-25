import React from 'react'
import axios from 'axios'
import styles from '../scss/Shared.module.scss'
import TodoItem from '../components/TodoItem'

function TodoPage() {
  const [todos, setTodos] = React.useState([])

  // Similar to componentDidMount
  React.useEffect(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'

    const duh = await axios.get(url)

    console.log(await duh.data)

    setTodos(duh.data)
  }, [])

  const todoDivs = todos.map((todo) => {
    return <TodoItem todo={todo} />
  })

  return (
    <div>
      <div className={styles.header}>Todo List</div>

      <div className={styles.centerColumn}>{todoDivs}</div>
    </div>
  )
}

export default TodoPage
