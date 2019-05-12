import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
// import { getMaxListeners } from 'cluster';


export default (props) => {
  const [userNameEditMode, setUserNameEditMode] = useState("read")
  const [emailEditMode, setEmailEditMode] = useState("read")
  const [passwordEditMode, setPasswordEditMode] = useState("read")
  const { newUserName, newPassWord, newEmail } = ""
  const { userName, passWord, eMail } = { userName : "Hans Müller", passWord : '****', eMail : 'test@getMaxListeners.com' }//props

  const handleEdit = (field) => {
    switch (field) {
      case 'userName':
        setUserNameEditMode(userNameEditMode === "read" ? "edit" : "read")
        break;
      case 'eMail':
        setEmailEditMode(emailEditMode === "read" ? "edit" : "read")
        break;
      case 'passWord':
        setPasswordEditMode(passwordEditMode === "read" ? "edit" : "read")
        break;
    }
  }

  const handleSubmit = (field) => {
    switch (field) {
      case 'newUserName':
        setUserNameEditMode(userNameEditMode === "read" ? "edit" : "read")
        console.log(newUserName)
        break;
      case 'newEmail':
        setEmailEditMode(emailEditMode === "read" ? "edit" : "read")
        break;
      case 'newPassWord':
        setPasswordEditMode(passwordEditMode === "read" ? "edit" : "read")
        break;
    }
  }


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
        <div className="ui large list settingsList">
          <div className="item inLine">
            <i className="user icon"></i>
            {
              userNameEditMode === "read"
                ? <div className="inLine">
                    <div className="content">{userName}</div>
                    <i className="right floated edit icon" onClick={() => handleEdit('userName')}></i>
                  </div>
                : <div className="inLine">
                    <div className="ui icon small input">
                      <input type="text" placeholder={userName} value={newUserName}  ></input>
                    </div>
                    <i class="check circle outline icon" onClick={() => handleSubmit({newUserName})}></i>
                  </div>
            }
          </div>
          <div className="item inLine">
            {/* <i className="right floated edit icon "></i> */}
            <i className="marker icon"></i>
            <div className="content">
              Karlsruhe, Germany
            </div>
          </div>
          <div className="item inLine">
            <i className="mail icon"></i>
            {
              emailEditMode === "read"
                ? <div className="inLine">
                    <div className="content">{eMail}</div>
                    <i className="right floated edit icon" onClick={() => handleEdit('eMail')}></i>
                  </div>
                : <div className="inLine">
                    <div className="ui icon small input">
                      <input type="text" placeholder={eMail} value={newEmail}  onSubmit={() => handleSubmit(newEmail)}></input>
                    </div>
                    <i class="check circle outline icon"></i>
                  </div>
            }
          </div>
          <div className="item inLine">
            <i className="lock icon"></i>
            {
              passwordEditMode === "read"
                ? <div className="inLine">
                    <div className="content">*******</div>
                    <i className="right floated edit icon" onClick={() => handleEdit('passWord')}></i>
                  </div>
                : <div className="inLine">
                    <div className="ui icon small input">
                      <input type="text" placeholder='******' value={newPassWord} onSubmit={() => handleSubmit(newPassWord)}></input>
                    </div>
                    <i class="check circle outline icon"></i>

                  </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}