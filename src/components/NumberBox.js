import React from 'react';
import PropTypes from 'prop-types';
import styles from './NumberBox.module.scss';

function NumberBox(props) {
  return <div className={styles.box}>{props.title}</div>;
}

NumberBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NumberBox;
