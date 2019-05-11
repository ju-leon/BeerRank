import React from 'react'
import QRCode from 'qrcode.react'
import './index.css'

export default (props) => {
  const url = document.URL;
  //console.log(url);

  return (
    <div className="Code">
      <div className="Text">More players?</div>
      <div className="Text Important">Scan this QR-Code!</div>
      <div className="ui container Qrcode ">
        <QRCode value={url} fgColor="#000" bgColor="#FFF" size="100"/>
      </div>
      <div className="Text IdText">Lobby Id: {props.gameId}</div>
    </div>
  )
}