import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'




function PostList({ setPosts, posts }) {

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
        <Container>
            {isLoading ?
                <div className="d-flex justify-content-center ">
                    <Spinner animation="border" role="status" id="spinner">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                :

                <div className="d-flex justify-content-center justify-content-md-around flex-wrap text-center">
                    {
                        posts.map((item) => {
                            return (
                                <Card key={nanoid()} style={{ width: '18rem', margin: '10px' }}>
                                    <Card.Body>
                                        <Card.Header><b>{item.title} </b> {item.published ? <div className="text-success"> Published </div> : <div className="text-danger"> Unpublished</div>} </Card.Header>
                                        <Card.Title> <img src="/stockBlog.png" style={{width:"100%"}}/> </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {item.username ? <span> Posted by: <i>{item.username.username} </i> </span> : null}
                                        </Card.Subtitle>

                                        <Link className="text-white" to={`/admin/posts/${item._id}`} >
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
                </div >
            }
        </Container>

    )

}


export default PostList


