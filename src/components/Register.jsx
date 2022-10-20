
import React from "react";
import { registerUser } from "../api-adapter";
const Register = (props) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const registeredUser = await registerUser(username, password)
        console.log(registeredUser)
        const token = registeredUser.token
        console.log(token)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
    }
  return (
    <div className="box">
    <h3 className="loginHead">Register</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input className="loginInput" id="username" type="text" required />
        <label htmlFor="password" >Password: </label>
        <input className="loginInput" id="password" type='password' />
        <button className="loginButton" type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default Register;