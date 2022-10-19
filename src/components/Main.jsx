import React, { useState, useEffect } from "react";
import { Navbar, Posts, Register, Login, Me } from "./";
import { loginUser, getMe } from "../api-adapter";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

    const [loggedInUser, setLoggedInUser] = useState([])
    setLoggedInUser
    
    useEffect(() => {
        console.log("hello");
        const getMeData = async () => {
        const myself = await getMe(localStorage.getItem('token'));
        console.log(myself);
        }; 
        if(localStorage.getItem('token')) 
        {getMeData();}
      }, []);
    


  return (
    <div id="main">
      <Navbar />
      <Login />
      {/* <Posts /> */}
      <Register />
      <Me getUserList = {getUserList}/>
    </div>
  );
};

export default Main;
