import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Main from 'components/Main'
import Login from 'components/Login'
import SignUp from 'components/SignUp'
import Landingpage from 'components/Landingpage'

let App = ({loggedIn}) => {
  return loggedIn
    ? <Main />
    : (
      <Router>
        <Switch>
          <Route path="/" exact component={Landingpage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
}

const mapStateToProps = ({user}) => {
  return {loggedIn: user.loggedIn
  }
}

App = connect(
  mapStateToProps,
  {}
)(App)

export default App;