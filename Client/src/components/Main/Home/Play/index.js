import React from 'react'

import CreationCard from './CreationCard'
import JoinCard from './JoinCard'

import './Play.sass'

export default () => {
  return (
    <div className="Play">
      <CreationCard />
      <JoinCard />
    </div>
  )
}