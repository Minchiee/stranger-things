import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost } from './'
import './Me.css'

const Posts = (props, SinglePost) => {

  const [posts, setAllPosts] = useState([]);
  
          
          
      
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);


 console.log



  return (
    
    <div className="box">

     
      {posts.length ? (
        posts.map((post) => {
          return <div className="postTitle" key={`post${post._id}`}>
            <div>{post.title} </div>
            <div>{post._id.username} </div>
            <div>{post.price} </div>
            <div>{post.location} </div>
            <div>{post.willDeliver} </div>
            
            <div>
              <button id='showPost' onSubmit={() => <SinglePost/>}>See Details</button>
              </div>
            </div>
        })
      ) : (
        <div>Loading Your Posts</div>
      )}
    </div>
  );
};

export default Posts;
