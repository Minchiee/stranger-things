import React, { useEffect } from "react";
import { Login } from "./";
import { getMe, loginUser } from "../api-adapter";

const Me = () => {
    // async function getLoggedInUser(event){
    //     event.preventDefault()
    //     const username = event.target[0].value
    //     const password = event.target[1].value
    //     const loggedInUser = await loginUser(username, password)
    //     const token = loggedInUser.token
    //     return token
    // }


  useEffect(() => {
    console.log("hello");
    const getMeData = async () => {
    const myself = await getMe(localStorage.getItem('token'));
    console.log(myself);
    };
    getMeData();
  }, []);

  return 
  <div>Hello</div>;
};

export default Me;
