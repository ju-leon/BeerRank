import React from 'react'

import './Cups.sass'

export default ({direction, level}) => {
  const rows = [1,2,3,4,5].filter(num => {
    switch(level) {
      case 1: return num <= 3
      case 2: return num <= 4
      case 3:
      default: return true
    }
  })

  const cups = rows.map(rowSize => {
    return <div className="cup-row">{new Array(rowSize).fill(<div></div>)}</div>
  })

  let flexFlow
  switch(direction){
    case "up":
      flexFlow = 'column'
      break
    case "down":
      flexFlow = 'column'
      cups.reverse()
      break
    default:
      break
  }

  return (
    <div className="Cups" style={{flexFlow}}>
      {cups}
    </div>
  )
}