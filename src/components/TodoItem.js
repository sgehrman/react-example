import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
  const { todo } = props

  return <div>{todo.title}</div>
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default TodoItem
