import React from "react";
import { Posts } from './'
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  return (
    <div className="single-post box">
          <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div >{post.location} </div>
          <Link to={`/posts/details/${post._id}`}><button>Post Details</button></Link>
    </div>
  );
};

export default SinglePost