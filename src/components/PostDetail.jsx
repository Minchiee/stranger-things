import React from "react";
import { Posts } from './'
import { Link, useParams } from "react-router-dom";

const PostDetail = (props) => {
  
  const {id} = useParams()
  const post = props.filterPosts(id)[0];
  console.log(post)
  return (
    <>{post ? 
    <div className="single-post box">
          <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div >{post.location} </div>
          <div >{post.willDeliver} </div>
          <Link to={`/posts`}><button>Back to Posts</button></Link>
    </div> : 
    <div>Loading Your Post..</div>} </>
  );
};

export default PostDetail