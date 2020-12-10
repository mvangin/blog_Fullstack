import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            await api.getAllPosts().then(postsRes => {
                let data = postsRes.data.data
                let publishedData = data.filter(dataItem => dataItem.published ===true)
                //let data = postsRes.data.data
                setPosts(publishedData)
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-center justify-content-md-around flex-wrap text-center">
                {
                    posts.map((item) => {
                        return (
                            <Card key={nanoid()} style={{ width: '18rem', margin: '10px' }}>
                                <Card.Body>
                                    <Card.Header><b>{item.title} </b></Card.Header>
                                    <Card.Title> </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {item.username ? <span> Posted by: <i>{item.username.username} </i> </span> : null}
                                    </Card.Subtitle>

                                    <Link className="text-white" to={`/posts/${item._id}`} >
                                        <Button>
                                            See More
                                            </Button>
                                    </Link>
                                    


                                </Card.Body>

                            </Card>

                            /*  <div key={nanoid()}>
                                   <Link to={`/posts/${item._id}`}> <b> {item.title}  </b></Link>
                           : {item.content}. {item.username ? <span> Posted by: <i>{item.username.username} </i> </span> : null}
                               </div>
                               */
                        )
                    })

                }
            </div>
        </div>

    )

}


export default PostList


