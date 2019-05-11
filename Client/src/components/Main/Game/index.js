import React from 'react'

import {PRE_GAME, IN_GAME, POST_GAME, END_GAME } from './states'
import PreGame from './PreGame'
import InGame from './InGame'
import PostGame from './PostGame'

import './Game.sass'

const gameMockup = {
  id: "123456",
  teamA: [
    {userName: "Gnarlex", rank: 1023},
    {userName: "Gnarlex", rank:  997},    
  ],
  teamB: [
    {userName: "Gnarlex", rank: 1120},
    {userName: "Gnarlex", rank:  870},
  ],
  state: IN_GAME,
}

export default ({game = gameMockup}) => {
  let screen
  switch(game.state) {
    case PRE_GAME:
      screen = <PreGame game={game}/>
      break
    case IN_GAME:
      screen = <InGame game={game}/>
      break
    case POST_GAME:
      screen = <PostGame game={game}/>
      break
    default:
      screen = {}
  }

  return (
    <div className="Game">
      {screen}
    </div>
  )
}