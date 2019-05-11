import React from 'react'
import QRCode from 'qrcode.react'
import './index.css'

export default (props) => {
  return (
    <div className="Code">
      <div className="Text">More players?</div>
      <div className="Text Important">Scan this QR-Code!</div>
      <div className="ui container Qrcode ">
        <QRCode value="http://google.com/" bgColor="#444" fgColor="#EEE" size="100"/>
      </div>
      <div className="Text IdText">Lobby Id: {props.gameId}</div>
    </div>
  )
}