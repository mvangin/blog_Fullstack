import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"


function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        async function fetchData() {
            await api.getAllPosts().then(postsRes => {
                let data = postsRes.data.data
                let publishedData = data.filter(dataItem => dataItem.published === true)
                //let data = postsRes.data.data
                setPosts(publishedData)
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    let reducedContent;
    return (
        <Container>
            {
                isLoading ?
                    <div className="d-flex justify-content-center ">
                        <Spinner animation="border" role="status" id="spinner">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <Container>
                        <div className="banner">
                            <div className="bannerPics">
                                <Image fluid src="/storepic1.jpg" className="storePic" alt="storepic" />
                                <Image fluid src="/storepic2.jpg" className="storePic" alt="storepic" />
                            </div>
                            <div className="bannerContent">
                                <h1 className="bannerTitle">
                                    New Store Launch!
                                </h1>

                                <div className="bannerSummary">
                                    The Conflict Continuum Store offers ancient combat
                                    sport themed athletic apparel and casual wear.
                                    <a href="https://theconflictcontinuum.com/" id="shopLink"> <u> SHOP NOW! </u> </a> 
                                </div>
                            </div>

                        </div>




                        <div className="d-flex justify-content-center justify-content-md-between flex-wrap text-center">
                            {
                                posts.map((item) => {
                                    return (
                                        <Card key={nanoid()} style={{ width: '18rem', margin: '10px' }}>
                                            <Card.Body >
                                                <Card.Header ><b>{item.title} </b></Card.Header>
                                                <Card.Title> <img src="/stockBlog.png" style={{ width: "100%" }} /> </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    {item.username ? <span> Posted by: <i>{item.username.username} </i> </span> : null}
                                                </Card.Subtitle>

                                                <Link className="text-white" to={`/posts/${item._id}`} >
                                                    <u className="text-dark">
                                                        See More
                                                </u>
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
                    </Container>
            }
        </Container >
    )

}


export default PostList


