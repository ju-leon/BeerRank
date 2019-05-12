import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import './index.css'

let Settings = ({ user }) => {
  const [userNameEditMode, setUserNameEditMode] = useState("read")
  const [emailEditMode, setEmailEditMode] = useState("read")
  const [passwordEditMode, setPasswordEditMode] = useState("read")
  const { newUserName, newPassWord, newEmail } = ""
  const { username, password, email } = user

  const handleEdit = (field) => {
    switch (field) {
      case 'username':
        setUserNameEditMode(userNameEditMode === "read" ? "edit" : "read")
        break;
      case 'email':
        setEmailEditMode(emailEditMode === "read" ? "edit" : "read")
        break;
      case 'password':
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
      <div className="header">
        <div className="back">
          <Link to="/home">
            <i className="angle left big icon"></i>
          </Link>
        </div>
        <h1>Settings</h1>
        <div className="placeholder"></div>
      </div>
      <div className="wrapper">

        <div className="ui large list settingsList">
          <div className="item inLine">
            <i className="user icon"></i>
            {
              userNameEditMode === "read"
                ? <div className="inLine">
                  <div className="content">{username}</div>
                  <i className="right floated edit icon" onClick={() => handleEdit('userName')}></i>
                </div>
                : <div className="inLine">
                  <div className="ui icon small input">
                    <input type="text" placeholder={username} value={newUserName}  ></input>
                  </div>
                  <i class="check circle outline icon" onClick={() => handleSubmit({ newUserName })}></i>
                </div>
            }
          </div>
          <div className="item inLine">
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
                  <div className="content">{email}</div>
                  <i className="right floated edit icon" onClick={() => handleEdit('eMail')}></i>
                </div>
                : <div className="inLine">
                  <div className="ui icon small input">
                    <input type="text" placeholder={email} value={newEmail} onSubmit={() => handleSubmit(newEmail)}></input>
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

const mapStateToProps = ({ user }) => {
  return { user }
}

Settings = connect(
  mapStateToProps,
  {}
)(Settings)

export default Settings