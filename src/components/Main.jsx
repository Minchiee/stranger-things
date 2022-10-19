import React, { useState, useEffect } from "react";
import { Navbar, Posts, Register, Login, Me } from "./";
import { loginUser, getMe } from "../api-adapter";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

    const [loggedInUser, setLoggedInUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    
    const getMeData = async () => {
    const myself = await getMe(localStorage.getItem('token'));
    setLoggedInUser(myself);
    setLoggedIn(true)
    }; 
    useEffect(() => {
        console.log("hello");
        if(localStorage.getItem('token')) 
        {getMeData();}
      }, []);
    


  return (
    <div id="main">
      <Navbar />
      <Login getMeData = {getMeData}/>
      {/* <Posts /> */}
      <Register />
      <Me loggedInUser = {loggedInUser}/>
    </div>
  );
};

export default Main;
