import React, {useState, useEffect} from 'react'
import { sendMessage, getMe } from '../api-adapter'
import './Me.css'



const Profile = (props) => {
 const messages = props.loggedInUser.messages 
const username = props.loggedInUser.username

const userPosts = props.loggedInUser.posts
console.log(userPosts)


    return (
    <div className='messageBox'>
          <div className="userPosts">
        <h3 className="messageTitle">Your Posts </h3>
        { userPosts ?
        userPosts.map((post) => {
          return (
           <div key={`post${post._id}`}>
             <div className="profileChild"> 
             <h3>Post</h3>
             {post.title} {post.price} </div>
          
         
        
           
            </div>
            );
          }): 

          <h2>No Messages Currently</h2>}</div> 
      <div>
        <h3>Received Messages </h3>
        { messages ?
        messages.map((message) => {
           if (message.fromUser.username != username ) return (
           <div key={`message${message._id}`}>
            <div className='receivedMessage'>Message: {message.content}From :{message.fromUser.username}</div>
          
           
            </div>
            );
          }): 
          
          <h2>No Messages Currently</h2>}</div> 
          <div>
      <h3>Sent Messages</h3>
          { messages ?
        messages.map((message) => {
           if(message.fromUser.username === username) return (
           <div key={`message${message._id}`}>
            <div className='receivedMessage'>Message: {message.content }</div>
            </div>
            );
          }): <h2>No Messages Currently</h2>}


          </div>
          
          
          </div>
    
  )
}

export default Profile