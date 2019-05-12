import React from 'react'
import { Link } from 'react-router-dom'

import './Play.sass'

export default () => {
  return (
    <div className="Play">
        <Link to="/game" className="myCard ui raised segment">
          <div className="iconWrapper">
          <i className="myIcon huge plus icon"></i>
          <h1>Create Game</h1>
          </div>
        </Link>
        <Link to="/join" className="myCard ui raised segment">
          <div className="iconWrapper">
          <i className="myIcon huge hand peace outline icon"></i>
          <h1>Join Game</h1>
          </div>
        </Link>
    </div>
  )
}