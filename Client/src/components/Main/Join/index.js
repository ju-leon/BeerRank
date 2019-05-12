import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Link } from 'react-router-dom'

import './index.css'

export default (props) => {
  const [gameId, setGameId] = useState('')
  const [result, setResult] = useState('')

  const handleChange = e => setGameId(e.target.value)

  const handleScan = data => {
    if (data)
      props.history.push(data)
  }

  const handleError = err => console.log(err)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.history.push('/game/' + gameId)
  }

  return (
    <div className="Join">
      <div className="Header">
        <div className="back">
          <Link to="/home">
            <i className="angle left big icon"></i>
          </Link>
        </div>
      </div>

      <div className="Wrapper">
        <div className="Text">Scan the QR Code from a team member!</div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <div className="Text">...or enter the lobby id:</div>
        <form className="ui small right labeled input" onSubmit={handleSubmit}>
          <input type="text" placeholder="123456" value={gameId} onChange={handleChange}/>
          <button className="ui button">
            Let's go!
          </button>
        </form>
      </div>
    </div>
  )
}