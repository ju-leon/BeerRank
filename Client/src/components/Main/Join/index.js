import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

export default () => {
  const [result, setResult] = useState('No result')

  const handleScan = data => {
    if (data)
      setResult(data)
  }

  const handleError = err => console.log(err)

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  )
}