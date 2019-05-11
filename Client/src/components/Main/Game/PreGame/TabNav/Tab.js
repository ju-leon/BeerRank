import React from 'react'

export default ({isActive, children, onClick}) => {
  const className = 'Tab' + (isActive ? ' active' : '')

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}