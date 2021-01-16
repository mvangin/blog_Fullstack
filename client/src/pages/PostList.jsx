import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

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

    return (

        <div>

            {
                isLoading ?
                    <div className="d-flex justify-content-center ">
                        <Spinner animation="border" role="status" id="spinner">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <div>
                        <Container>
                            <div className="banner">
                                <div className="bannerPics">
                                    <img src="/storepic1.jpg" className="storePic storePic1" alt="storepic1" />
                                    <img fluid src="/storepic2.jpg" className="storePic storePic2" alt="storepic2" />
                                </div>
                                <div className="bannerContent">
                                    <h1 className="bannerTitle">
                                        New Store Has Launched!
                                </h1>

                                    <div className="bannerSummary">
                                        {//<Image fluid src="/storepic1.jpg" className="" alt="storepic" />
                                        }
                                    The Conflict Continuum Store offers ancient combat
                                    sport themed athletic apparel and casual wear.
                                    <a href="https://theconflictcontinuum.com/" id="shopLink"> <u> SHOP NOW! </u> </a>
                                    </div>
                                </div>

                            </div>



                            <div>
                                <div className="authorContainer">
                                    <div className="authorTitle">
                                        <div>
                                            <b> Meet the Author </b>
                                        </div>
                                        <Image fluid src="/contactAuthor.jpg" id="authorPic" alt="storepic" />
                                    </div>
                                    <div className="authorContent">
                                        <p>
                                            Michael van Ginkel has a masters degree in conflict studies.
                                            Through scholarship and fellowship funding, he has researched
                                            conflict and hand-to-hand combat across Europe, Asia, and America.
                                        </p>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center justify-content-md-around flex-wrap text-center">
                                    {
                                        posts.map((item) => {
                                            return (
                                                <Card key={nanoid()} style={{ width: '18rem', margin: '10px' }}>
                                                    <Card.Body >
                                                        <Card.Header ><b>{item.title} </b></Card.Header>
                                                        <Card.Title> <img src="/stockBlog.png" alt="stockblog" style={{ width: "100%" }} /> </Card.Title>
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
                            </div>

                        </Container>
                        <footer className="footer w-100">
                            <div className="text-white social">
                                <div>
                                    <h1>
                                        The Conflict Continuum
                                    </h1>
                                </div>

                                <div className="socialIcons">
                                    <a href="https://www.facebook.com/conflictarch/"> <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                                    <a href="https://www.twitter.com/conflictarch/"> <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                                    <a href="https://www.instagram.com/theconflictcontinuum/"> <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                                </div>
                            </div>


                            <div className="text-white recentPubs">
                                <div className="pubContainer">
                                    <div>
                                        <h1> Recent publications </h1>
                                    </div>
                                    <div>
                                        <p>
                                            <a href="https://www.stableseas.org/maritime-enforcement-illicit-trades/countering-maritime-drug-trafficking-bangladesh">

                                                Countering Maritime Drug Trafficking in Bangladesh’s Coastal Waters, Stable Seas
                                            </a>

                                        </p>
                                        <a href="https://www.stableseas.org/maritime-enforcement-illicit-trades/countering-maritime-drug-trafficking-bangladesh">
                                            <img src="bangladesh.jpg" alt="banladesh" />
                                        </a>
                                    </div>

                                    <div>
                                        <p>
                                            <a href="https://www.stableseas.org/publications/blue-economy-policy-proposals-barmm">

                                                “BARMM Blue Economy: Policy Proposals For the Bangsamoro Autonomous Region in Muslim Mindanao”, Stable Seas
                                            </a>

                                        </p>
                                        <a href="https://www.stableseas.org/publications/blue-economy-policy-proposals-barmm">
                                            <img src="blueEconomy.jpg" alt="blueOcean" />
                                        </a>
                                    </div>

                                    <div>
                                        <p>
                                            <a href="http://cimsec.org/a-south-pacific-island-led-approach-to-regional-maritime-security/45703" >

                                                “A South Pacific Island-Led Approach to Regional Maritime Security“, Center for International Maritime Security
                                            </a>

                                        </p>
                                        <a href="http://cimsec.org/a-south-pacific-island-led-approach-to-regional-maritime-security/45703" >
                                            <img src="southPacific.jpg" alt="southPacific" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white twitter">
                                <div>
                                    <h1>
                                        Twitter Feed
                                    </h1>
                                </div>

                                <div className="">
                                    <a href="https://twitter.com/conflictarch?lang=en" />
                                    <img src="/twitter.png" alt="twitter" />

                                </div>
                            </div>



                        </footer>
                    </div>
            }

        </div >
    )

}


export default PostList


