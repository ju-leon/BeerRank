import React from 'react'

import Team from './Team'
import Cups from './Cups'

import './Lobby.sass'

export default ({game, setState, currentTeam, gotoTeam}) => {
  const {teamA, teamB} = game

  return (
    <div className="Lobby ui container">
      <div className="side">
        <Team players={currentTeam === 0 ? teamA : teamB} active={currentTeam === 0} onClick={() => gotoTeam(0)} />
        {/* <Cups direction="down" level={teamA.length} /> */}
      </div>

      <button className="button primary" onClick={() => setState('IN_GAME')}>S T A R T</button>

      <div className="side">
        {/* <Cups direction="up" level={teamB.length} /> */}
        <Team players={currentTeam === 1 ? teamA : teamB} active={currentTeam === 1} onClick={() => gotoTeam(1)} />
      </div>
    </div>
  )
}