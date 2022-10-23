import React, { useEffect, useState } from "react";
import { getPosts, getPostsDetails,  } from "../api-adapter";
import { SinglePost } from "./";
import { Link } from "react-router-dom";
import "./Me.css";

const Posts = (props) => {
  const messages = props.loggedInUser.messages 
  const filterPosts = props.filterPosts 
  const posts = props.posts

  const username = props.loggedInUser.username


 
  return (
    <div className="box">
     <div className="receivedMessage">
        <h3 className="messageTitle">Messages about your posts </h3>
        { messages ?
        messages.map((message) => {
           if (message.fromUser.username != username ) return (
           <div key={`message${message._id}`}>
             <div className="messageBox"> -POST-{message.post.title}</div>
            <div className="messageBox">Message:{message.content}</div>
            <div> {message.title}</div> 
            <div className="messageBox">From {message.fromUser.username}</div>
           
            </div>
            );
          }): 

          <h2>No Messages Currently</h2>}</div> 

      {posts.length ? (
        posts.map((post) => {
          return (
            <SinglePost key={`post-id${post._id}`} post={post} filterPosts ={filterPosts} username = {username}/>
          );
        })
      ) : (
        <div>Loading Your Posts</div>
      )}
    </div> 
  );
};

export default Posts;
