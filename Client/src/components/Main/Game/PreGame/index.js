import React, {useState} from 'react'

import Header from './Header'
import TabNav from './TabNav'
import Lobby from './Lobby'
import Code from './Code'

export default ({game, setState}) => {
  const [tabIndex, setTabIndex] = useState(0)
  const [currentTeam, setCurrentTeam] = useState(0)

  const screen = tabIndex === 0
    ? <Lobby game={game} currentTeam={currentTeam} gotoTeam={setCurrentTeam} setState={setState}/>
    : <Code gameId={game.id} />

  const {id, teamA, teamB} = game
  const headerProps = {
    title: `Game #${id}`,
    playerCount: teamA.length + teamB.length,
  }

  return (
    <div>
      <Header {...headerProps} />
      <TabNav activeTab={tabIndex} tabClickHandler={setTabIndex} />
      {screen}
    </div>
  )
}