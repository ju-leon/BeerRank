import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Main from 'components/Main'
import Login from 'components/Login'
import Register from 'components/Register'
import Landingpage from 'components/Landingpage'

let App = ({loggedIn}) => {
  return loggedIn
    ? <Main />
    : (
      <Router>
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
}

const mapStateToProps = ({user}) => {
  return {loggedIn: true /*user.loggedIn*/ }
}

App = connect(
  mapStateToProps,
  {}
)(App)

export default App;