import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import './index.css'

export default () => {
  const [result, setResult] = useState('No result')

  const handleScan = data => {
    if (data)
      setResult(data)
      //TODO: now navigate to PreGame View with given link
  }

  const handleError = err => console.log(err)

  return (

    <div className="Join">
      <div className="Header"></div>
      <div className="Wrapper">
        <div className="Text">Scan the QR Code from a team member!</div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {/* <p>{result}</p> */}
        <div className="Text">Doesn't work? Enter the game id:</div>
        <div className="ui mini action right labeled input">
          <input type="text" placeholder="Game Id..."/>
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </div>
    </div>
  )
}