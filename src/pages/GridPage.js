import React from 'react'
import styles from '../scss/Shared.module.scss'
import gridStyles from '../scss/GridPage.module.scss'
import FlexPopupMenu from '../components/FlexPopupMenu'
import GridBox from '../components/GridBox'

function GridPage() {
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

export default GridPage
