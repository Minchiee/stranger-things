import React, {useState} from 'react'
import { loginUser } from '../api-adapter'


function Login() {
    async function handleSubmit(event){
        event.preventDefault()
loginUser()
    }

  return (
    <div className="login">
      {`This is your Login Component`}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input id="username" type="text" required />
        <label htmlFor="password" >Password: </label>
        <input id="password" type='password' />
        <button type="submit">Submit</button> 
      </form>
    </div>
  )
}

export default Login