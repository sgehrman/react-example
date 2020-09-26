import React from 'react'
import sharedStyles from '../scss/Shared.module.scss'
import styles from '../scss/TodoPage.module.scss'
import TodoItem from '../components/TodoItem'
import PageHeader from '../components/PageHeader'
import TodoContext from '../js/todoContext'

function TodoPage() {
  const { todos, loadTodos } = React.useContext(TodoContext)

  // Similar to componentDidMount
  React.useEffect(() => {
    loadTodos()
  }, [])

  const todoDivs = todos.map((todo) => {
    return <TodoItem todo={todo} key={todo.id} />
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
