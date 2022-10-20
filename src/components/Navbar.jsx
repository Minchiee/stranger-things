import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  const logged = props.loggedIn;

  return (
    <>
      <div id="navbar">
        <h2> Stranger's Things</h2>
        <Link className="links" to="posts">
          Posts
        </Link>{" "}
        {logged ? (
          <Link
            className="links"
            onClick={() => {
              props.setLoggedIn(false);
              props.setLoggedInUser({});
              localStorage.removeItem("token");
            }}
          >
            Logout
          </Link>
        ) : (
          <Link className="links" to="login">
            Login
          </Link>
        )}
        {logged ?(
          null
        ):
        <Link className="links" to="register">
          Register
        </Link>
        }
        
        {logged ? (
          <Link className="links" to="create">
          Create Post
        </Link>
        ): null
        }
        
        <Link className="links" to="">
          Home
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
