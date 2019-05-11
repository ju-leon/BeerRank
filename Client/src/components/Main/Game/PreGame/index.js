import React, {useState} from 'react'

import Header from './Header'
import TabNav from './TabNav'
import Lobby from './Lobby'
import Code from './Code'

export default ({game}) => {
  const [tabIndex, setTabIndex] = useState(0)

  const screen = tabIndex === 0
    ? <Lobby game={game} />
    : <Code game={game} />

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