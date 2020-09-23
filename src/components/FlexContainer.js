import React from 'react'
import shared from '../scss/Shared.module.scss'
import styles from '../scss/FlexContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import NumberBox from './NumberBox'

function FlexContainer() {
  const [alignItems, setAlignItems] = React.useState('center')
  const [alignContent, setAlignContent] = React.useState('flex-start')
  const [justifyContent, setJustifyContent] = React.useState('flex-start')
  const [flexDirection, setFlexDirection] = React.useState('row')

  const boxes = []

  for (let i = 0; i < 16; i++) {
    boxes.push(<NumberBox key={i} title={i.toString()} />)
  }

  const flexDirectionOptions = ['row', 'column']
  const alignItemsOptions = ['stretch', 'center', 'flex-start', 'flex-end']
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
      case 'align-content':
        setAlignContent(item)
        break
      case 'justify-content':
        setJustifyContent(item)
        break
      case 'flex-direction':
        setFlexDirection(item)
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
    height: '40vh',
    width: '60vw',
    maxHeight: '400px',
    maxWidth: '600px',
    backgroundColor: '#eee',
    alignItems,
    alignContent,
    justifyContent,
    flexDirection,
  }

  return (
    <div>
      <div className={shared.header}>Flexbox Layout</div>

      <div className={styles.layoutBox}>
        <div style={boxContainer}>{boxes}</div>
      </div>

      <div className={styles.centerColumn}>
        <div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="flex-direction" options={flexDirectionOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{flexDirection}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="align-items" options={alignItemsOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{alignItems}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="justify-content" options={justifyContentOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{justifyContent}</div>
          </div>
          <div className={styles.controlMenuItem}>
            <FlexPopupMenu title="align-content" options={alignContentsOptions} onMenuSelect={onMenuSelect} />
            <div className={styles.controlMenuValue}>{alignContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlexContainer
