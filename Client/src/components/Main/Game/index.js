import React, {useState} from 'react'

import {PRE_GAME, IN_GAME, POST_GAME, END_GAME } from './states'
import PreGame from './PreGame'
import InGame from './InGame'
import PostGame from './PostGame'

import './Game.sass'

let gameMockup = {
  id: "123456",
  teamA: [
    {userName: "Gnarlex", rank: 1023},
    {userName: "Gnarlex", rank:  997},    
  ],
  teamB: [
    {userName: "Gnarlex", rank: 1120},
    {userName: "Gnarlex", rank:  870},
  ],
  state: PRE_GAME,
}

export default ({game = gameMockup}) => {
  const [gameState, setGameState] = useState(PRE_GAME)

  let screen
  switch(gameState) {
    case PRE_GAME:
      screen = <PreGame game={game} setState={setGameState}/>
      break
    case IN_GAME:
      screen = <InGame game={game} setState={setGameState}/>
      break
    case POST_GAME:
      screen = <PostGame game={game} setState={setGameState}/>
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