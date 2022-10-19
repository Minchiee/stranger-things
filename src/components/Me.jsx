import React, { useEffect } from "react";
import { Login } from "./";
import { getMe, loginUser } from "../api-adapter";

const Me = (props) => {
    // async function getLoggedInUser(event){
    //     event.preventDefault()
    //     const username = event.target[0].value
    //     const password = event.target[1].value
    //     const loggedInUser = await loginUser(username, password)
    //     const token = loggedInUser.token
    //     return token
    // }
console.log(props.loggedInUser)

 

  return 
  <div>Hello</div>;
};

export default Me;
