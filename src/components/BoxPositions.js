import React from 'react'
import styles from '../scss/BoxPosition.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import NumberBox from './NumberBox'

function BoxPositions() {
  const [alignItems, setAlignItems] = React.useState('center')
  const [justifyItems, setJustifyItems] = React.useState('center')
  const [alignContents, setAlignContents] = React.useState('center')
  const [justifyContent, setJustifyContent] = React.useState('center')

  const boxes = []

  for (let i = 0; i < 16; i++) {
    boxes.push(<NumberBox title={i.toString()} />)
  }

  const alignItemsOptions = ['stretch', 'center', 'flex-start', 'flex-end']
  const justifyItemsOptions = ['stretch', 'center', 'flex-start', 'flex-end']
  const alignContentsOptions = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']
  const justifyContentOptions = [
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]

  const onMenuSelect = (property, item) => {
    switch (property) {
      case 'align-items':
        setAlignItems(item)
        break
      case 'align-contents':
        setAlignContents(item)
        break
      case 'justify-items':
        setJustifyItems(item)
        break
      case 'justify-content':
        setJustifyContent(item)
        break
      default:
        console.log('onMenuSelect: default case hit.')
        break
    }
  }

  const boxContainer = {
    border: '6px solid black',
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    height: '60vh',
    width: '60vw',
    maxHeight: '600px',
    maxWidth: '600px',
    backgroundColor: '#eee',
    alignItems,
    justifyItems,
    alignContents,
    justifyContent,
  }

  return (
    <div>
      <div className={styles.centerBox}>
        <div style={boxContainer}>{boxes}</div>
      </div>

      <div className={styles.centerColumn}>
        <div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="align-items" options={alignItemsOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{alignItems}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="justify-content" options={justifyContentOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{justifyItems}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="align-content" options={alignContentsOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{alignContents}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="justify-items" options={justifyItemsOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{justifyContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxPositions
