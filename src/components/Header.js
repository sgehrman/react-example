import React from 'react'
import { GitHub } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styles from '../scss/Header.module.scss'

function Header() {
  const github = 'https://github.com/sgehrman/react-example'

  return (
    <header style={header}>
      <div style={titleColumn}>
        <div style={title}>CSS Playground</div>
        <div className={styles.linkBar}>
          <NavLink exact to="/" style={link} activeStyle={activeLink}>
            Flexbox
          </NavLink>
          <div className={styles.spacer}>|</div>
          <NavLink exact to="/grid" style={link} activeStyle={activeLink}>
            Grid
          </NavLink>
          <div className={styles.spacer}>|</div>
          <NavLink exact to="/todo" style={link} activeStyle={activeLink}>
            Todo
          </NavLink>
        </div>
      </div>

      <div style={githubButton}>
        <IconButton href={github} target="_blank" color="inherit">
          <GitHub />
        </IconButton>
      </div>
    </header>
  )
}

const header = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  backgroundColor: '#111',
  padding: '8px',
  flexDirection: 'column',
}

const titleColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  a: {
    textDecoration: 'none',
  },
}

const title = {
  fontSize: 'calc(10px + 1.1vmin)',
  fontWeight: 'bold',
}

const githubButton = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  right: '12px',
  top: '0px',
  bottom: '0px',
  width: '24px',
}

const link = {
  fontSize: 'calc(10px + .6vmin)',
  fontWeight: 'bold',
  color: '#555',
}

const activeLink = {
  ...link,
  color: 'steelblue',
}

export default Header
