import React, {useState}from "react";
import { Posts } from './'
import { Link, useParams } from "react-router-dom";
import { deletePost } from "../api-adapter";

const PostDetail = (props) => {
  // const [author, setAuthor] = useState("");
  const {id} = useParams()
  const post = props.filterPosts(id)[0];
 
  console.log(post)

  async function handleDelete(e){
    e.preventDefault()
   
    const toDelete= e.target.id
    const token =localStorage.getItem('token')
    const deleted = await deletePost(post._id,token)
   console.log(deleted)
   

}





  return (
    <>{post ? 
    <div className="single-post box">
          <div >{post.title} </div>
          <div >{post.description} </div>
          <div >{post.price} </div>
          <div >{post.location} </div>
          <div >{post.willDeliver} </div>
        
          <Link to={`/posts`}><button>Back to Posts</button></Link>
          <button onClick={handleDelete} >Delete Post</button>
    </div> : 
    <div>Loading Your Post..</div>} </>
  );
};

export default PostDetail