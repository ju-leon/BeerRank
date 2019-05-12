import React from 'react'
import {reduxForm, Field} from 'redux-form'

import './PostGame.sass'

let PostGame = ({handleSubmit}) => {
  const _handleSubmit = ({score}) => {
    alert(score)
  }

  return (
    <div className="PostGame ui container">
      <form className="ui form" onSubmit={handleSubmit(_handleSubmit)}>
        <div className="field">
          <label>Score</label>
          <Field name="score" type="number" component="input" /> 
        </div>
      </form>
    </div>
  )
}

PostGame = reduxForm({
  form: 'gameResult'
})(PostGame)

export default PostGame