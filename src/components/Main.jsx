import React, { useState, useEffect } from "react";
import { Navbar, Posts, Register, Login, Me } from "./";
import { loginUser } from "../api-adapter";

const Main = () => {
  const BASE = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

    const [userList, setUserList] = useState([]);
        const [registeredUser, setRegisteredUser] = useState({});
        const [filteredList, setFilteredList] = useState([]);
      
        async function getUserList() {
            const response = await fetch(`${BASE}/users/login`);
            const users = await response.json();
    setUserList(users.token);
    console.log(userList);
        }
    
  useEffect(() => {getUserList()}, []);

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
