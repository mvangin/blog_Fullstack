import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import {Link} from 'react-router-dom'

function Post({match}) {

    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);

        async function fetchData() {
            await api.getPostByID(match.params.id)
            .then(res => {
                let data = res.data.data; 
                setPost(data)
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    return(
        <div>
            {post.title}!
            <br/>
            {post.content}
        </div>
    )
}

export default Post