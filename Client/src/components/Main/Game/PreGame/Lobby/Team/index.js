import React from 'react'

import Player from './Player'

import './Team.sass'

export default ({players}) => {
  const content = players.map((player) => <Player player={player} />)
  return (
    <div className="Team">
      {content}
    </div>
  )
}