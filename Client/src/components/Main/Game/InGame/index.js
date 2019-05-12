import React from 'react'
import Timer from 'react-compound-timer'

export default () => {
  return (
    <div className="ui container">
      <Timer>
        <Timer.Minutes /> : <Timer.Seconds />
      </Timer>

      <div>
      <button className="primary button">E N D E</button>
      </div>
    </div>
  )
}