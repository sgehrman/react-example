import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core'

function TodoItem(props) {
  const { todo } = props

  const handleChange = (event) => {
    console.log(event)
  }

  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox checked={todo.isCompleted} onChange={handleChange} />} label={todo.title} />
    </FormGroup>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default TodoItem
