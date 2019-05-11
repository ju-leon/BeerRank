import React from 'react'

import Team from './Team'
import Cups from './Cups'

import './Lobby.sass'

export default ({game}) => {
  const {teamA, teamB} = game
  return (
    <div className="Lobby ui container">
      <div className="side">
        <Team players={teamA}/>
        {/* <Cups direction="down" level={teamA.length} /> */}
      </div>

      <button className="button primary">S T A R T</button>

      <div className="side">
        {/* <Cups direction="up" level={teamB.length} /> */}
        <Team players={teamB}/>
      </div>
    </div>
  )
}