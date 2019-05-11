import React, {useState} from 'react'
import { connect } from 'react-redux'

import Header from './Header';
import TabNav from './TabNav'
import Play from './Play'
import Me from './Me'

let Home = ({score}) => {
  const [tabIndex, setTabIndex] = useState(0)

  const content = tabIndex === 0
    ? <Play />
    : <Me />

  return (
    <div>
      <Header score={score} />
      <TabNav activeTab={tabIndex} tabClickHandler={setTabIndex} />
      <div className="ui container">
        {content}
      </div>
    </div>
  )
}

const mapStateToProps = ({user}) => {
  return {score: user.score}
}

Home = connect(
  mapStateToProps,
  {}
)(Home)

export default Home