import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

import './index.css'

export default ({score=1000}) => {
  return (
    <div className="Header">
        <div className="rank-container">
          <label>Elo</label>
          <div className="value">{score}</div>
        </div>
        <Logo/>
        <Link to="/settings"><i class="cog icon big"></i></Link>
    </div>
  )
}