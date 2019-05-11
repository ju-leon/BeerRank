import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Logo from 'components/Main/Home/Header/Logo'


import './SignUp.sass'

let SignUp = ({handleSubmit}) => {
  return (
    <div className="SignUp ui container">
      <div className="header">
        <Logo/>
      </div>
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

        <div className="submit-container">
          <button className="button primary">Create</button>
        </div>

        <Link className="signup-link" to="/login">Already have an account?</Link>
      </form>
    </div>
  )
}

SignUp = reduxForm({
  form: 'signUp'
})(SignUp)

export default SignUp