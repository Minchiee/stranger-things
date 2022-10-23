import React, { useState, useEffect } from "react";
import { getPosts, getPostsDetails, } from "../api-adapter";
import {
  Navbar,
  Posts,
  Register,
  Login,
  CreatePost,
  PostDetail,
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
import Profile from "./Profile";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  const getMeData = async () => {
    const myself = await getMe(localStorage.getItem("token"));
    setLoggedInUser(myself);
   
    setLoggedIn(true);
  };
  useEffect(() => {
   
    if (localStorage.getItem("token")) {
      getMeData();
    }
  }, []);

function filterPosts(id){
  
  return posts.filter((post) => {
    return post._id == id
  })
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} setLoggedInUser = {setLoggedInUser}/>}>
        <Route path="create" element={<CreatePost loggedInUser={loggedInUser} />} />
        <Route path="login" element={<Login getMeData={getMeData} />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element ={< Main/>} />
        <Route path="search" element ={<SearchBar/>}/>
        <Route path="posts/:id" element = {<PostDetail filterPosts = {filterPosts} loggedInUser = {loggedInUser} />}/>
        <Route path="posts" element={<Posts posts={posts} filterPosts={filterPosts} loggedInUser = {loggedInUser}/>} />
        <Route path="me" element={<Profile loggedInUser = {loggedInUser}/>}/>
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
