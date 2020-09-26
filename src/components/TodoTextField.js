import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { TextField, IconButton } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import TodoContext from '../js/todoContext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'black',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
    },
  },
})(TextField)

const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '10px',
}

function TodoTextField() {
  const [textValue, setTextValue] = React.useState('')
  const { addTodo } = React.useContext(TodoContext)

  const classes = useStyles()

  const sendButton = (e) => {
    e.preventDefault()

    if (textValue.length > 0) {
      addTodo(textValue)

      setTextValue('')
    }
  }

  const onTextChange = (e) => {
    setTextValue(e.target.value)
  }

  return (
    <div style={containerStyles}>
      <form className={classes.root} noValidate onSubmit={sendButton}>
        <ValidationTextField
          className={classes.margin}
          autoFocus
          label="New Todo"
          //   required
          variant="outlined"
          onChange={onTextChange}
          value={textValue}
        />
      </form>
      <IconButton onClick={sendButton} target="_blank" color="inherit">
        <Send />
      </IconButton>
    </div>
  )
}

export default TodoTextField
