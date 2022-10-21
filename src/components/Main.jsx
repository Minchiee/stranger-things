import React, { useState, useEffect } from "react";
import {
  Navbar,
  Posts,
  Register,
  Login,
  CreatePost,
  PostDetails,
  SinglePost,
  SearchBar
} from "./";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { loginUser, getMe } from "../api-adapter";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const getMeData = async () => {
    const myself = await getMe(localStorage.getItem("token"));
    setLoggedInUser(myself);
    console.log(myself);
    setLoggedIn(true);
  };
  useEffect(() => {
    console.log("hello");
    if (localStorage.getItem("token")) {
      getMeData();
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} setLoggedInUser = {setLoggedInUser}/>}>
        <Route path="posts" element={<Posts />} />
        <Route path="create" element={<CreatePost loggedInUser={loggedInUser} />} />
        <Route path="login" element={<Login getMeData={getMeData} />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element ={< Main/>} />
        <Route path="search" element ={<SearchBar/>}/>
      </Route>
    )
  );

  return (
    <div>
      {" "}
      <RouterProvider router={router} />{" "}
    </div>
  );
};

export default Main;
