import React, {useState} from 'react'

import TabNav from './TabNav'
import Play from './Play'
import Me from './Me'

export default () => {
  let [tabIndex, setTabIndex] = useState(0)

  const content = tabIndex === 0
    ? <Play />
    : <Me />

  return (
    <div>
      <TabNav activeTab={tabIndex} tabClickHandler={setTabIndex} />
      <div className="ui container">
        {content}
      </div>
    </div>
  )
}