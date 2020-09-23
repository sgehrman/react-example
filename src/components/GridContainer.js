import React from 'react'
import styles from '../scss/Shared.module.scss'
import gridStyles from '../scss/GridContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import GridBox from './GridBox'

function GridContainer() {
  const [alignItems, setAlignItems] = React.useState('center')
  const [alignContent, setAlignContent] = React.useState('flex-start')
  const [justifyContent, setJustifyContent] = React.useState('flex-start')

  const boxes = []

  for (let i = 0; i < 4; i++) {
    boxes.push(<GridBox key={i} title={`box${i}`} className={`box${i}`} />)
  }

  return (
    <div>
      <div className={styles.header}>Grid Layout</div>
      <div className={styles.layoutBox}>
        <div className={gridStyles.wrapper}>{boxes}</div>
      </div>
    </div>
  )
}

export default GridContainer
