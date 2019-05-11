import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'


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
      <div className="wrapper">
        <h1>Settings</h1>
        <div className="ui large list">
          <div className="item">
            <i className="right floated edit icon"></i>
            <i className="user icon"></i>
            <div className="content">
              Hans Mueller
            </div>
          </div>
          <div className="item">
            <i className="right floated edit icon"></i>
            <i className="marker icon"></i>
            <div className="content">
              Karlsruhe, Germany
            </div>
          </div>
          <div className="item">
            <i className="right floated edit icon"></i>
            <i className="mail icon"></i>
            <div className="content">
              <a href="mailto:jack@semantic-ui.com">hans.mueller@student.kit.edu</a>
            </div>
          </div>
          <div className="item">
            <i className="right floated edit icon"></i>
            <i className="lock icon"></i>
            <div className="content">*****</div>
          </div>
        </div>
      </div>
    </div>
  )
}