import React from 'react'
import PropTypes from 'prop-types'

function PageHeader(props) {
  const headerStyles = {
    textAlign: 'center',
    color: 'steelblue',
    fontSize: '1.3em',
    fontWeight: 'bold',
    padding: '10px',
  }

  return <div style={headerStyles}>{props.title}</div>
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageHeader
