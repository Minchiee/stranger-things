import React, {useState} from 'react'
import { loginUser } from '../api-adapter'


function Login() {
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  async function handleSubmit(event){
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const loggedInUser = await loginUser(username, password)
    console.log(loggedInUser)
    const token = loggedInUser.token
    localStorage.setItem('token', token)
    // console.log(localStorage.getItem(`${token}`))
    console.log(token)
}
 
  return (
    <div className="login">
      {`This is your Login Component`}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input id="username" type="text" required onChange={elem => setUserName(elem.target.value)}/>
        <label htmlFor="password" >Password: </label>
        <input id="password" type='password' required onChange={elem => setPassword(elem.target.value)}/>
        <button type="submit">Submit</button> 
      </form>
    </div>
  )
}

export default Login