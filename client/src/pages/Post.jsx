import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import CommentCreate from "./CommentCreate"

function Post({ match }) {

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    let postID = match.params.id

    async function fetchData() {
        await api.getPostByID(postID)
            .then(res => {
                setPost(res.data.posts);
                setComments(res.data.comments);
                setIsLoading(false);
                console.log(res.data.comments);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])


    return (
        <>
            {post.content}

            <div>
                <u> Comments  </u>
            </div>
            {
                comments.map(comment => {
                    return <div key={nanoid()}> {comment.content}.  {comment.username ? <span> Posted by: {comment.username.username} </span> : null} </div>
                })
            }

            <br />
            <CommentCreate postID={postID} fetchData={fetchData} />
        </>
    )

}

export default Post

