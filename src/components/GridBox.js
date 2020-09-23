import React from 'react'
import gridStyles from '../scss/GridContainer.module.scss'
import FlexPopupMenu from './FlexPopupMenu'
import NumberBox from './NumberBox'

function GridBox(props) {
  const { className, title } = props
  const [classOption, setClassOption] = React.useState(className)

  const boxes = []
  for (let i = 0; i < 16; i++) {
    boxes.push(<NumberBox key={i} title={i.toString()} />)
  }

  const classOptions = ['box0', 'box1', 'box2', 'box3']

  const onMenuSelect = (_, item) => {
    setClassOption(item)
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
  switch (classOption) {
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
        <FlexPopupMenu title="" morePopup options={classOptions} onMenuSelect={onMenuSelect} />
      </div>
    </div>
  )
}

export default GridBox
