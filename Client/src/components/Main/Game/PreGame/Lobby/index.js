import React from 'react'

import Team from './Team'

import './Lobby.sass'

export default ({players}) => {

  return (
    <div className="Lobby ui container">
      <div className="side">
        <Team />
        <div></div>
      </div>

      <div className="side">
        <div></div>
        <Team />
      </div>
    </div>
  )
}