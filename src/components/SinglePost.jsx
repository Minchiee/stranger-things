import React, {useState} from "react";
import { Posts } from './'
import { Link, useParams} from "react-router-dom";
import { sendMessage } from "../api-adapter";

const SinglePost = (props) => {
  const {id} = useParams()
  const post = props.post;
  const username = props.username
  const [content, setContent] = useState("") 
  
 
  async function handleMessage(e){
    e.preventDefault()
    
    
    const token =localStorage.getItem('token')
    const message = await sendMessage(post._id,token,content)
   console.log(message)


}
  return (
    
   <>
   
    <div className="singlePostBox">
          <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div>Author: {post.author.username}</div>
          <div >{post.location} </div>
          <div >{post.willDeliver} </div>
          <div> {post.messages}</div>
          <Link to={`/posts/${post._id}`}><button>Post Details</button></Link>
          <form onSubmit={handleMessage}>
             <input
                className="input"
                type="text"
                name="name"
                placeholder="Write this user a Message.."
                 onChange={(e) => setContent(e.target.value)}
              ></input>
        <button>Send Message</button>
       
    </form>
    </div>
   </>
  );
};

export default SinglePost