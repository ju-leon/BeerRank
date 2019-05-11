import React from 'react'

export default ({player}) => {
  const {userName, rank} = player
  return (
    <div className="Player">
      <div className="name">{userName}</div>
      <div className="rank">{rank}</div>
    </div>
  )
}