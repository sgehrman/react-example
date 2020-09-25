import React from 'react'
import axios from 'axios'
import sharedStyles from '../scss/Shared.module.scss'
import styles from '../scss/TodoPage.module.scss'
import TodoItem from '../components/TodoItem'
import PageHeader from '../components/PageHeader'

function TodoPage() {
  const [todos, setTodos] = React.useState([])

  // Similar to componentDidMount
  React.useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=20'

    const getData = async () => {
      const res = await axios.get(url)

      setTodos(res.data)
    }

    getData()
  }, [])

  const todoDivs = todos.map((todo) => {
    return <TodoItem todo={todo} />
  })

  return (
    <div>
      <PageHeader title="Todo List" />

      <div className={sharedStyles.layoutBox}>
        <div className={styles.todoBox}>
          <div className={styles.centerColumn}>{todoDivs}</div>
        </div>
      </div>
    </div>
  )
}

export default TodoPage
