import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import { MoreVert } from '@material-ui/icons'

function FlexPopupMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const { title, options, onMenuSelect, morePopup, dark } = props

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
    color: dark ? 'black' : 'white',
    textTransform: 'lowercase',
    border: dark ? '1px solid #555' : 'none',
    padding: '0px',
    margin: dark ? '4px 0px' : '0px',
  }

  const menuItems = []

  options.forEach((option) => {
    menuItems.push(
      <MenuItem key={option} onClick={() => handleMenuItem(option)}>
        {option}
      </MenuItem>,
    )
  })

  let popup = (
    <Button style={buttonStyle} onClick={handleClick}>
      {`${title}:`}
    </Button>
  )

  if (morePopup) {
    popup = (
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
    )
  }

  return (
    <div>
      {popup}
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems}
      </Menu>
    </div>
  )
}

FlexPopupMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMenuSelect: PropTypes.func.isRequired,
  morePopup: PropTypes.bool,
  dark: PropTypes.bool,
}

FlexPopupMenu.defaultProps = {
  morePopup: false,
  dark: false,
}

export default FlexPopupMenu
