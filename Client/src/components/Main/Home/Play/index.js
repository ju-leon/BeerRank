import React from 'react'
import { Link } from 'react-router-dom'

import './Play.sass'

export default () => {
  return (
    <div className="Play">
        <Link to="/game" className="myCard ui raised segment">
          <h1>Create Game</h1>
        </Link>
        <Link to="/join" className="myCard ui raised segment">
          <h1>Join Game</h1>
        </Link>
    </div>
  )
}