import React from 'react'
import gridStyles from '../scss/GridContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import NumberBox from './NumberBox'
import styles from '../scss/Shared.module.scss'

function GridBox(props) {
  const { className } = props

  let gc
  let gr

  switch (className) {
    case 'box0':
      gc = '1/3'
      gr = '1/3'
      break
    case 'box1':
      gc = ' 3'
      gr = '1/3'
      break
    case 'box2':
      gc = '2/4'
      gr = '3'
      break
    case 'box3':
      gc = '1 '
      gr = '2/4'
      break
    default:
      console.log('className invalid')
      break
  }

  const [rowValue, setRowValue] = React.useState(gr)
  const [columnValue, setColumnValue] = React.useState(gc)

  const boxes = []
  for (let i = 0; i < 16; i++) {
    boxes.push(<NumberBox key={i} title={i.toString()} />)
  }

  const classOptions = ['1', '2', '3', '4', '1/3', '1/4', '1/5', '2/4', '3/5']

  const onRowMenuSelect = (_, item) => {
    setRowValue(item)
  }

  const onColumnMenuSelect = (_, item) => {
    setColumnValue(item)
  }

  const boxClass = {
    gridColumn: columnValue,
    gridRow: rowValue,
  }

  return (
    <div className={gridStyles.gridCard} style={boxClass}>
      <div className={styles.controlMenuItem}>
        <FlexPopupMenu dark title="Row" options={classOptions} onMenuSelect={onRowMenuSelect} />
        <div className={styles.controlMenuValue}>{rowValue}</div>
      </div>

      <div className={styles.controlMenuItem}>
        <FlexPopupMenu dark title="Column" options={classOptions} onMenuSelect={onColumnMenuSelect} />
        <div className={styles.controlMenuValue}>{columnValue}</div>
      </div>
    </div>
  )
}

export default GridBox
