import React, {useState, useEffect} from "react";
import { Navbar, Posts, Register, Login } from "./";
import { loginUser } from "../api-adapter";

const Main = () => {
    const BASE = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT'

    const [userList, setUserList] = useState([]);
        const [registeredUser, setRegisteredUser] = useState({});
        const [filteredList, setFilteredList] = useState([]);
      
        async function getUserList() {
            const response = await fetch(`${BASE}/users/login`);
            const users = await response.json();
            setUserList(users.data._id);
          console.log(getUserList("setuser"))
        }
    
    

  return (
    <div id="main">
      <Navbar />
      <Login />
      {/* <Posts /> */}
      <Register />
    </div>
  );
};

export default Main;