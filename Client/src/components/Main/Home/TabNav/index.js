import React from 'react'

import Tab from './Tab'

import './TabNav.sass'

export default ({activeTab, tabClickHandler}) => {
  return (
    <div className="TabNav">
      <Tab isActive={activeTab === 0} onClick={() => tabClickHandler(0)}><h2>Play</h2></Tab>
      <Tab isActive={activeTab === 1} onClick={() => tabClickHandler(1)}><h2>History</h2></Tab>
    </div>
  )
}