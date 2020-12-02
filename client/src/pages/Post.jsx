import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import CreateComment from "./CreateComment"

function Post({ match }) {

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    let postID = match.params.id


    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            await api.getPostByID(postID)
                .then(res => {
                    let post = res.data.posts;
                    setPost(post)
                    setComments(res.data.comments)
                    setIsLoading(false);
                    console.log(res.data.comments)
                })
             
        }
        fetchData();
    }, [])

    return (
        <>
        {post.content}

        {
        comments.map(comment => {
            return <div key={nanoid()} style={{color:"red"}}> {comment.content} </div>
        })
        }

        <br/>
        <CreateComment postID={postID}/>
        </>
    )

}

export default Post

