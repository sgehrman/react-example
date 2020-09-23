import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

function FlexPopupMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { title, options, onMenuSelect } = props

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItem = (option) => {
    onMenuSelect(title, option)

    handleClose()
  }

  const buttonStyle = {
    color: 'white',
  }

  const menuItems = []

  for (let option of options) {
    menuItems.push(
      <MenuItem key={option} onClick={() => handleMenuItem(option)}>
        {option}
      </MenuItem>,
    )
  }

  return (
    <div>
      <Button style={buttonStyle} onClick={handleClick}>
        {title}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems}
      </Menu>
    </div>
  )
}

FlexPopupMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onMenuSelect: PropTypes.func.isRequired,
}

export default FlexPopupMenu
