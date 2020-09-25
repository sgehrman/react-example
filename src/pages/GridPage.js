import React from 'react'
import styles from '../scss/Shared.module.scss'
import gridStyles from '../scss/GridPage.module.scss'
import PageHeader from '../components/PageHeader'
import GridBox from '../components/GridBox'

function GridPage() {
  const boxes = []

  for (let i = 0; i < 4; i++) {
    boxes.push(<GridBox key={i} className={`box${i}`} />)
  }

  return (
    <div>
      <PageHeader title="Grid Layout" />

      <div className={styles.layoutBox}>
        <div className={gridStyles.gridContainer}>{boxes}</div>
      </div>
    </div>
  )
}

export default GridPage
