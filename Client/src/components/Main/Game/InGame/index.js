import React from 'react'
import Timer from 'react-compound-timer'

import './InGame.sass'

export default ({setState}) => {
  return (
    <div className="InGame ui container">
      <h1>
        <Timer formatValue={(num) => num < 10 ? '0' + num : num + ''}>
          <Timer.Minutes /> : <Timer.Seconds />
        </Timer>
      </h1>

      <div>
        <button className="primary button" onClick={() => setState('POST_GAME')}>F I N I S H</button>
      </div>
    </div>
  )
}