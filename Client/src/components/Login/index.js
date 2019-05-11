import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Login = ({ handleSubmit }) => {
  return (
    <div>
      <h1>Login</h1>
      
      <form className="ui form" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <Field name="input" component="input" type="text" />
        </div>

        <div>
          <label>Password</label>
          <Field name="pw" component="input" type="password" />
        </div>

        <button className="primary">Login</button>
      </form>
    </div>
  )
}

Login = reduxForm({
  form: 'login',
})(Login)

export default Login