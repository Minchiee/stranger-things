import React, {useEffect, useState} from 'react'
import {getPosts} from '../api-adapter'
const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])
return (
    <div className='box'>{`This is your Posts Component`} 
    {
            posts.length ? posts.map((post) => {
                return <div>{post.title}</div>
        }) : <div>Loading Your Posts</div>
        }
    </div>
)}

export default Posts