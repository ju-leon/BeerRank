import React from 'react'

import './Header.sass'

export default ({title,playerCount}) => {
  return (
    <div className="Header">
      <div className="back">
        <i class="angle left big icon"></i>
      </div>
      <h2 className="title">{title}</h2>
      <div className="numDisplay">{playerCount}/6</div>
    </div>
  )
}