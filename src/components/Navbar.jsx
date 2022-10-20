import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
   
      <div id="navbar">
        <h2> Stranger's Things</h2>
      
      <Link className="links" to="posts"> Posts </Link>
      <Link className="links" to="login"> Login</Link>
      <Link className="links" to="register"> Register</Link>
      <Link className="links" to="create">Create Post</Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
