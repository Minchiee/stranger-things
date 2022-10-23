import React, {useState, useEffect} from 'react'
import { sendMessage, getMe } from '../api-adapter'
import './Me.css'



const Profile = (props) => {
 const messages = props.loggedInUser.messages 
const username = props.loggedInUser.username
const [mappedMessage, setMappedMessage] = useState([])





// useEffect(() => {
//   if (messages) return {

//   newState: messages.map((message) =>
//       { return setMappedMessage(newState);
//       console.log(newState);  },
//   }
// }[]);

// useEffect(() => {
//   if (messages) return  messages.map(message);
// });
// console.log(mappedMessage)
// useEffect(() => {
//   if (messages) return {

//   newState: messages.map((message) =>
//       { return setMappedMessage(newState);
//       console.log(newState);  }, []);
//   }
// });

// useEffect(() => {
//   if (messages) return messages.map((message) =>
//       { return setMappedMessage(newState);
//       console.log(newState);  }, []);
// });

  
//  console.log(props.loggedInUser)
//  const [messagesReceived, setMessagesReceived] = useState([])
//  const [messagesSent, setMessagesSent] = useState([])
 //map through messages are they sent or received and set them to the state
//  message.fromUser === currentUser
    return (
      <div className='messageBox'>
      <div>
        <h3>Received Messages </h3>
        { messages ?
        messages.map((message) => {
           if (message.fromUser.username != username ) return (
           <div key={`message${message._id}`}>
            <div>Message: {message.content}</div>
            <div>From :{message.fromUser.username}</div>
            <div></div>
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
            <div>Message: {message.content }</div>
            </div>
            );
          }): <h2>No Messages Currently</h2>}


          </div>
          
          
          </div>
    
  )
}

export default Profile