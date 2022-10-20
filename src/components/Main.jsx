import React, { useState, useEffect } from "react";
import { Navbar, Posts, Register, Login, Me, PostDetails, SinglePost } from "./";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { loginUser, getMe } from "../api-adapter";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

    const [loggedInUser, setLoggedInUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    
    const getMeData = async () => {
    const myself = await getMe(localStorage.getItem('token'));
    setLoggedInUser(myself);
    console.log(myself)
    setLoggedIn(true)
    }; 
    useEffect(() => {
        console.log("hello");
        if(localStorage.getItem('token')) 
        {getMeData();}
      }, []);
    
      const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element = {<Navbar />} > 
      <Route path = 'Login' element = {<Login getMeData = {getMeData} />}/>
      {/* <Posts /> */}
      <Route path = 'Register' element = {<Register/>} />
      <Route path = 'Me' element = {<Me loggedInUser = {loggedInUser} />}/>
      <Route path = 'Posts' element = {< Posts/>} /></Route>
      ))

  return (
    <div id="main">
      
    </div>
  );
};

export default Main;
