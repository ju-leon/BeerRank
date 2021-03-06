import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Game from './Game'
import Join from './Join'
import Settings from './Settings'

import './Main.sass'

export default () => {
  return (
    <div className="Main">
      <Router>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/join" component={Join} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  )
} 