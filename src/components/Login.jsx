import React, {useState} from 'react'
import { Outlet, Link } from 'react-router-dom';
import { loginUser } from '../api-adapter'
import './Me.css'

function Login(props) {
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
    props.getMeData()
    // console.log(localStorage.getItem(`${token}`))
    console.log(token)
}
 
  return (
    <div className="login">
     <h3 className="loginHead">Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input className='loginInput' id="username" type="text" required onChange={elem => setUserName(elem.target.value)}/>
        <label htmlFor="password" >Password: </label>
        <input className='loginInput' id="password" type='password' required onChange={elem => setPassword(elem.target.value)}/>
        <button className='loginButton' type="submit">Submit</button> 
        
           
         </form>
    </div>
  )
}

export default Login