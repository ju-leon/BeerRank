import React from 'react'

export default () => {
  const [input, setInput] = useState('')
  const [pw, setPw] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>User or Email</label>
          <input type="email" value={input} placeholder=""/>
        </div>

        <div>
          <label>Password</label>
          <input type="password" value={pw} onChange={} placeholder=""/>
        </div>
      </form>
    </div>
  )
}