import React, { useEffect, useState } from "react";
import { getPosts, getPostsDetails,  } from "../api-adapter";
import { SinglePost } from "./";
import { Link } from "react-router-dom";
import "./Me.css";

const Posts = (props) => {
  const filterPosts = props.filterPosts 
  const posts = props.posts
  return (
    <div className="box">
      {posts.length ? (
        posts.map((post) => {
          return (
            <SinglePost key={`post-id${post._id}`} post={post} filterPosts ={filterPosts}/>
          );
        })
      ) : (
        <div>Loading Your Posts</div>
      )}
    </div>
  );
};

export default Posts;
