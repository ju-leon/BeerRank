import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { login } from 'actions/userActions'
import Logo from 'components/Main/Home/Header/Logo'

import './Login.sass'

let Login = ({ handleSubmit, login }) => {

  const _handleSubmit = (values) => {
    login(values)
  }

  return (
    <div className="Login ui container">
      <Logo/>
      <form className="ui form" onSubmit={handleSubmit(_handleSubmit)}>
        <div className="field">
          <label>Username</label>
          <Field name="input" component="input" type="text" />
        </div>

        <div className="field">
          <label>Password</label>
          <Field name="pw" component="input" type="password" />
        </div>

        <div className="submit-container">
          <button className="primary">Login</button>
        </div>

        <Link className="signup-link" to="/signup">Not signed up yet?</Link>
      </form>
    </div>
  )
}

Login = reduxForm({
  form: 'login',
})(Login)

Login = connect(
  null,
  {login}
)(Login)

export default Login