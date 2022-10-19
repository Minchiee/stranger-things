import React, {useState} from 'react'
import { loginUser } from '../api-adapter'


function Login() {
  async function handleSubmit(event){
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const loggedInUser = await loginUser(username, password)
    console.log(loggedInUser)
    const token = loggedInUser.token
    let getUserToken = localStorage.getItem('token')
    console.log(token)
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