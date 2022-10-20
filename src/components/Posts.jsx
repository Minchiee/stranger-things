import React, { useEffect, useState } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost } from './'

const Posts = (props, SinglePost) => {

  const [posts, setAllPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);
  
  return (
    <div className="box">
      {posts.length ? (
        posts.map((post) => {
          return <div>
            {post.title}
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
