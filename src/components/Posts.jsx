import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost } from "./";
import { Link } from "react-router-dom";
import "./Me.css";

const Posts = (props) => {
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  const handleClick = event => {
    <Link to={`/posts/details/${post._id}`}></Link>
  }

  return (
    <div className="box">
      {posts.length ? (
        posts.map((post) => {
          return (
            <div className="postTitle" key={`post${post._id}`}>
              <div>{post.title} </div>
              <div>{post._id.username} </div>
              <div>{post.price} </div>
              <div>{post.location} </div>
              <div>{post.willDeliver} </div>
              <Link to={`/posts/${post._id}`}><button>Post Details</button></Link>
            </div>
          );
        })
      ) : (
        <div>Loading Your Posts</div>
      )}
    </div>
  );
};

export default Posts;
