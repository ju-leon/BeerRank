import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import './Login.sass'

let Login = ({ handleSubmit }) => {
  return (
    <div className="Login ui container">
      <h1>Beer Rank</h1>
      
      <form className="ui form" onSubmit={handleSubmit}>
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

export default Login