import { React, useState, useEffect } from "react";
import {} from "./";
import { getPosts } from "../api-adapter";
import "./Me.css";

const SearchBar = (props) => {
  const myPuppies = props.puppyData;
  const [posts, setAllPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getPosts();
      setAllPosts(allPosts);
    }
    fetchPosts();
  }, []);

  // {posts.filter((post) => post.name.toLowerCase().includes(query.toLowerCase())).map((post)

  //   const result = posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="searchBar">
      <div className="heading">
        <h2 className="PuppyBowl"> Search by Name </h2>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Search Posts..."
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></input>
      </div>
      <div className="searchPostsContainer">
        {posts
          .filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((post) => (
            <div key={`post${post._id}`} className="searchPosts">
              <div className="pupName">
                <span> {post.title}</span> <span>Price: {post.price}</span>
                <div>
                  <button id="showPost" onSubmit={() => <SinglePost />}>
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
