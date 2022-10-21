import React from 'react'
import { sendMessage, getMe } from '../api-adapter'
const Profile = (props) => {
 const messages = props.loggedInUser.messages 
 console.log(messages)

 
 
 
 
 
    return (
        messages.map((message) => {
            return (
           <div key={`message${message}`}>
            <div>{message.content}</div>
            </div>
            );
          })
    
  )
}

export default Profile