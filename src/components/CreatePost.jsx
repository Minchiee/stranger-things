import React, { useState, useEffect } from "react";
import { Login } from ".";
import { getMe, loginUser } from "../api-adapter";
import "./Me.css";
import { json } from "react-router-dom";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState([]);
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [_id, set_Id] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, description, author, location, price, willDeliver };
    setAuthor(props.loggedInUser);

    fetch(
      "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          post: {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            willDeliver: `${willDeliver}`,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      console.log(" Checkbox is checked");
    } else {
      console.log("Checkbox is NOT checked");
    }
    setWillDeliver((current) => !current);
  };

  return (
    <div className="submitPost">
      <h2> Hello, {props.loggedInUser.username}! Add a New Post:</h2>
      <form onSubmit={handleSubmit}>
        <label className="labels"> Post Title </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="labels">Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label className="labels">Location</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="willdeliver"> Will Deliver?</label>
        <input
          type="checkbox"
          id="willdeliver"
          name="willdeliver"
          value={willDeliver} // does value needs to be something else?
          onChange={handleChange}
        />

        <label className="labels">Price</label>
        <input
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button>Add Post</button>
        <p>{title}</p>
        <p> {description}</p>
      </form>
    </div>
  );
};

export default CreatePost;
