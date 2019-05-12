import React from 'react'
import { Link } from 'react-router-dom'

import './Header.sass'

export default ({title,playerCount}) => {
  return (
    <div className="Header">
      <div className="back">
        <Link to="/home">
          <i className="angle left big icon"></i>
        </Link>
      </div>
      <h2 className="title">{title}</h2>
      <div className="numDisplay">{playerCount}/6</div>
    </div>
  )
}