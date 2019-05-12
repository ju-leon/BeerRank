import React, {useState} from 'react'

import {PRE_GAME, IN_GAME, POST_GAME, END_GAME } from './states'
import { addGame } from 'apis/game'
import PreGame from './PreGame'
import InGame from './InGame'
import PostGame from './PostGame'

import './Game.sass'

let gameMockup = {
  id: "123456",
  teamA: [
    {userName: "Gnarlex", rank: 1000},  
  ],
  teamB: [
  ],
  state: PRE_GAME,
}

export default ({game = gameMockup}) => {
  const [gameState, setGameState] = useState(PRE_GAME)

  const handleClick = async () => {
    addGame()
  }

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