import React from 'react'
import Timer from 'react-compound-timer'

import './InGame.sass'

export default () => {
  return (
    <div className="InGame ui container">
      <h1>
        <Timer>
          <Timer.Minutes /> : <Timer.Seconds />
        </Timer>
      </h1>

      <div>
      <button className="primary button">E N D E</button>
      </div>
    </div>
  )
}