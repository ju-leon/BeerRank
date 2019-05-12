import React from 'react'

import Player from './Player'

import './Team.sass'

export default ({players, active, onClick}) => {
  const content = players.map((player) => <Player player={player} />)
  return (
    <div className={`Team ${active ? 'active' : ''}`} onClick={onClick}>
      {content}
    </div>
  )
}