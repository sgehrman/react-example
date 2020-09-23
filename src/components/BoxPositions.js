import React from 'react'
import styles from './BoxPosition.module.scss'
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
    }
    console.log(property)
    console.log(item)
  }

  const boxContainer = {
    border: '6px solid black',
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    height: '60vh',
    width: '60vw',
    backgroundColor: '#eee',
    alignItems: alignItems,
    justifyItems: justifyItems,
    alignContents: alignContents,
    justifyContent: justifyContent,
  }

  return (
    <div>
      <div className={styles.centerBox}>
        <div style={boxContainer}>{boxes}</div>

        <div className={styles.controlBox}>
          <FlexPopupMenu title="align-items" options={alignItemsOptions} onMenuSelect={onMenuSelect} />
          <FlexPopupMenu title="justify-content" options={justifyContentOptions} onMenuSelect={onMenuSelect} />
          <FlexPopupMenu title="align-content" options={alignContentsOptions} onMenuSelect={onMenuSelect} />
          <FlexPopupMenu title="justify-items" options={justifyItemsOptions} onMenuSelect={onMenuSelect} />
        </div>
      </div>

      <div className={styles.centerColumn}>
        <div>align-items: {alignItems}</div>
        <div>justify-items: {justifyItems}</div>
        <div>align-contents: {alignContents}</div>
        <div>justify-content: {justifyContent}</div>
      </div>
    </div>
  )
}

export default BoxPositions
