import React, {useState} from 'react'

import Header from './Header';
import TabNav from './TabNav'
import Play from './Play'
import Me from './Me'

export default () => {
  const [tabIndex, setTabIndex] = useState(0)

  const content = tabIndex === 0
    ? <Play />
    : <Me />

  return (
    <div>
      <Header/>
      <TabNav activeTab={tabIndex} tabClickHandler={setTabIndex} />
      <div className="ui container">
        {content}
      </div>
    </div>
  )
}