import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

//import 'react-table/react-table.css'

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            await api.getAllPosts().then(postsRes => {
                let data = postsRes.data.data
                setPosts(data)
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    return (
        <div>
              <h1> ALL POSTS </h1>
            {
                posts.map((item) => {
                    return (
                    <div key={nanoid()}>
                        <Link to={`/posts/${item._id}`}> <b> {item.title}  </b></Link>
                    : {item.content}. {item.username ? <span> Posted by: <i>{item.username.username} </i> </span> : null}
                    </div>
                    )
                })

            }
        </div>

    )

}


export default PostList


