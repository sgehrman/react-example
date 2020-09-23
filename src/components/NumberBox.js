import React from 'react'
import styles from './NumberBox.module.scss'
import PropTypes from 'prop-types'

function NumberBox(props) {
  return <div className={styles.box}>{props.title}</div>
}

NumberBox.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NumberBox
