import React from 'react'
import { GitHub } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

function Header() {
  const clickGithub = () => {
    console.log('https://github.com/sgehrman/react-example')
  }

  const github = 'https://github.com/sgehrman/react-example'

  return (
    <header style={header}>
      <div style={titleColumn}>
        <div style={title}>CSS Playground</div>
        <div style={subtitle}>Written in React</div>
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
}

const title = {
  fontSize: 'calc(10px + 1.1vmin)',
  fontWeight: 'bold',
}

const subtitle = {
  fontSize: 'calc(10px + .6vmin)',
  fontWeight: 'bold',
  color: 'steelblue',
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

export default Header
