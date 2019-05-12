import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'

import './PostGame.sass'

let PostGame = ({ handleSubmit }) => {
  const [scoreSubmitMode, setScoreSubmitMode] = useState("read");
  const _handleSubmit = ({ score }) => {
    console.log(score)
    console.log({ score })
    setScoreSubmitMode(scoreSubmitMode === "read" ? "submitted" : "read")
  }

  return (
    <div className="PostGame ui container">
      <form className="ui form" onSubmit={handleSubmit(_handleSubmit)}>
        <div className="field">
          <h1>How many cups does your team have to drink?</h1>
          <Field name="score" type="number" component="input" />
        </div>
      </form>
      {
        scoreSubmitMode === 'submitted'
          ? (1 > 0
            ? <div className="fix">Next time, you will rock the game!</div>
            : <div className="fix">Yeah, Congrats!</div>)

          : ''
      }
      <div>
        <button className="primary">Next Game!</button>
        <button className="secondary ghost">Home</button>
      </div>
    </div >
  )
}

PostGame = reduxForm({
  form: 'gameResult'
})(PostGame)

export default PostGame