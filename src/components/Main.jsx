import React, {useState} from "react";
import { Navbar, Posts, Register, Login } from "./";


const Main = () => {
  return (
    <div id="main">
      <Navbar />
      {/* <Login /> */}
      {/* <Posts /> */}
      <Register />
    </div>
  );
};

export default Main;