import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import CreateComment from "./CreateComment"

function Post({ match }) {

    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let postID = match.params.id


    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            await api.getPostByID(postID)
                .then(res => {
                    let data = res.data.data;
                    setPost(data)
                    setIsLoading(false);
                })
        }
        fetchData();
    }, [])

    return (
        <>
        hello {post.content}
        <br/>
        <CreateComment postID={postID}/>
        </>
    )

}

export default Post

