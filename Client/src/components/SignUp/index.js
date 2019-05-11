import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './SignUp.sass'

let SignUp = ({handleSubmit}) => {
  return (
    <div className="SignUp ui container">
      <h1>Create Account</h1>

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="fluid field">
          <label>User Name</label>
          <Field name="username" component="input" />
        </div>

        <div className="field">
          <label>Email</label>
          <Field name="email" component="input" type="email" />
        </div>

        <div className="field">
          <label>Password</label>
          <Field name="password" component="input" type="password" />
        </div>

        <button className="button primary">Create</button>
      </form>
    </div>
  )
}

SignUp = reduxForm({
  form: 'signUp'
})(SignUp)

export default SignUp