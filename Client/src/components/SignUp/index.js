import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { addUser } from 'apis/user'
import {login} from 'actions/userActions'

import Logo from 'components/Main/Home/Header/Logo'


import './SignUp.sass'

let SignUp = ({handleSubmit, login}) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const _handleSubmit = async (values) => {
    setIsLoading(true)

    console.log(values)
    await addUser(values)

    const {username, password} = values
    await login({username, password})

    setIsLoading(false)
  }
  
  return (
    <div className="SignUp ui container">
      <Logo/>
      <h1>Create Account</h1>

      <form className="ui form" onSubmit={handleSubmit(_handleSubmit)}>
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
          <button className={`button ${isLoading ? 'ui loading' : 'primary'}`}>Create</button>
        </div>

        <Link className="signup-link" to="/login">Already have an account?</Link>
      </form>
    </div>
  )
}

SignUp = reduxForm({
  form: 'signUp',
})(SignUp)

SignUp = connect(
  null,
  {login}
)(SignUp)

export default SignUp