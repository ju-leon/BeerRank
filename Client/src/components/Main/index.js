import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Play from './Play'
import Me from './Me'

export default () => {
  return (
    <Router>
      <div>Header</div>
      <div><span> Play </span><span> Me </span></div>
      <Switch>
        <Route path="/play" component={Play} />
        <Route path="/Me" component={Me} />
      </Switch>
    </Router>
  )
} 