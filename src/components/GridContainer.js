import React from 'react'
import styles from '../scss/Shared.module.scss'
import gridStyles from '../scss/GridContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import GridBox from './GridBox'

function GridContainer() {
  const boxes = []

  for (let i = 0; i < 4; i++) {
    boxes.push(<GridBox key={i} className={`box${i}`} />)
  }

  return (
    <div>
      <div className={styles.header}>Grid Layout</div>
      <div className={styles.layoutBox}>
        <div className={gridStyles.gridContainer}>{boxes}</div>
      </div>
    </div>
  )
}

export default GridContainer
