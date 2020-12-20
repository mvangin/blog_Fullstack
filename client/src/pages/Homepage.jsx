import React from "react"
import { Link } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { useState } from "react"
import ContactForm from "../components/ContactForm"



function Homepage({ user }) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Jumbotron fluid style={{ height: "100vh", marginBottom: "0px", paddingBottom: "0px", backgroundImage: "url(/vesuvius.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <div className="homepageContainer">
                    <div>
                        <h1>
                            Welcome to SnoffleStein Blogs
                            </h1>


                        {
                            user ?
                                <div className="linkContainer">
                                    <Link to="/posts" className="link"><button className="homeLink"> View Blogs </button> </Link>
                                    <button onClick={() => setModalShow(true)} className="homeLink"> Contact Us </button> 

                                    <ContactForm
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        //add user
                                    />
                                </div>

                                :
                                <div className="linkContainer">
                                    <Link to="/posts" className="link"><button className="homeLink"> View Blogs </button> </Link>
                                    <Link to="/login" className="link">  <button className="homeLink">  Sign In  </button> </Link>
                                    <button onClick={() => setModalShow(true)} className="homeLink"> Contact Us </button> 

                                    <ContactForm
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                        }
                    </div>
                </div>
            </Jumbotron>
        </>
    )
}

export default Homepage