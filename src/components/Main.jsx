import React, {useState} from "react";
import { Navbar, Posts, Register } from "./";


const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Posts />
      <Register />
    </div>
  );
};

export default Main;