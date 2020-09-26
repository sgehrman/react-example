import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, IconButton, FormGroup, FormControlLabel } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import styles from '../scss/TodoPage.module.scss'
import TodoContext from '../js/todoContext'

function TodoItem(props) {
  const { deleteTodo, toggleComplete } = React.useContext(TodoContext)

  const { todo } = props

  const handleChange = () => {
    toggleComplete(todo.id)
  }

  const handleClick = () => {
    deleteTodo(todo.id)
  }

  const closeButtonStyle = {
    color: 'rgba(255,0,0,.5)',
  }

  const labelStyle = {
    textDecoration: todo.completed ? 'line-through' : 'none',
  }

  return (
    <div className={styles.todoItemBox}>
      <FormGroup row>
        <FormControlLabel
          checked={todo.completed}
          control={<Checkbox checked={todo.isCompleted} onChange={handleChange} />}
          label={<div style={labelStyle}>{todo.title}</div>}
        />
      </FormGroup>

      <div className={styles.spacer} />

      <IconButton size="small" style={closeButtonStyle} onClick={handleClick}>
        <Close />
      </IconButton>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    userId: PropTypes.number,
    completed: PropTypes.bool,
  }).isRequired,
}

export default TodoItem
