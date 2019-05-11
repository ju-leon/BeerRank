import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
  return (
    <div className="Settings">
      <div className="Header">
        <div className="back">
          <Link to="/home">
            <i className="angle left big icon"></i>
          </Link>
        </div>
      </div>
    <div>Settings</div>
    <div>Username:{props.userName}</div>
  </div>
  )
}