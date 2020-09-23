import React from 'react'
import styles from '../scss/Shared.module.scss'
import gridStyles from '../scss/GridContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import NumberBox from './NumberBox'

function GridBox(props) {
  const [alignItems, setAlignItems] = React.useState('center')
  const [alignContent, setAlignContent] = React.useState('flex-start')
  const [justifyContent, setJustifyContent] = React.useState('flex-start')

  const { className, title } = props

  const boxes = []
  for (let i = 0; i < 16; i++) {
    boxes.push(<NumberBox key={i} title={i.toString()} />)
  }

  const alignItemsOptions = ['stretch', 'center', 'flex-start', 'flex-end']

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
      default:
        console.log('onMenuSelect: default case hit.')
        break
    }
  }

  const box0 = {
    gridColumn: '1/3',
    gridRow: '1/3',
  }

  const box1 = {
    gridColumn: '3',
    gridRow: '1/3',
  }

  const box2 = {
    gridColumn: '2/4',
    gridRow: '3',
  }

  const box3 = {
    gridColumn: '1',
    gridRow: '2/4',
  }

  let boxClass
  switch (className) {
    case 'box0':
      boxClass = box0
      break
    case 'box1':
      boxClass = box1
      break
    case 'box2':
      boxClass = box2
      break
    case 'box3':
      boxClass = box3
      break
    default:
      console.log('className invalid')
      break
  }

  return (
    <div style={boxClass}>
      {title}
      <div className={gridStyles.popup}>
        <FlexPopupMenu title="" morePopup options={alignItemsOptions} onMenuSelect={onMenuSelect} />
      </div>
    </div>
  )
}

export default GridBox
