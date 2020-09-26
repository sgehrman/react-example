import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, IconButton, FormGroup, FormControlLabel } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import styles from '../scss/TodoPage.module.scss'

function TodoItem(props) {
  const { todo } = props

  const handleChange = (event) => {
    console.log(event)
  }

  const handleClick = () => {
    console.log('delete')
  }

  const closeButtonStyle = {
    color: 'rgba(255,0,0,.5)',
  }

  return (
    <div className={styles.todoItemBox}>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={todo.isCompleted} onChange={handleChange} />}
          label={todo.title}
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
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
    completed: PropTypes.bool,
  }).isRequired,
}

export default TodoItem
