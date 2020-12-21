import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useState } from "react"
import ContactForm from "../components/ContactForm"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"



function NavbarComponent({ user, displayName }) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            < Navbar.Brand>
                <Link to="/" className="nav-link">
                    <img src="/brandLogo.png" alt="Logo" style={{ width: "60px" }} />
                </Link>
            </Navbar.Brand >

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                < Navbar.Brand>
                    <Link to="/" className="nav-link text-light">
                        SnoffleStein Blogs
                    </Link>
                </Navbar.Brand >
                <Nav>
                    <Link to="/posts" className="nav-link">
                        All Posts
                    </Link>
                </Nav>

                <Nav>
                    <a href="https://theconflictcontinuum.com/" className="nav-link"> <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "1.5rem", color: "white", margin: "1.5rem" }} /> </a>
                </Nav>

                <Nav className="ml-auto">
                    <a href="https://www.facebook.com/conflictarch/"> <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                    <a href="https://www.twitter.com/conflictarch/"> <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                    <a href="https://www.instagram.com/theconflictcontinuum/"> <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1.2rem", color: "white", margin: ".5rem" }} /> </a>
                </Nav>


                <Nav>
                    <Link onClick={() => setModalShow(true)} className="contactUs ml-3 mr-3 nav-link text-light"> Contact Us </Link>
                </Nav>

                <ContactForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    user={user}
                />


                {user ?
                    <>
                        <Nav >
                            <Link to="/logout" className="nav-link ">
                                Logout <i>{displayName}</i>
                            </Link>
                        </Nav>
                    </>
                    :
                    <Nav >
                        <Link to="/login" className="nav-link ">
                            Login
                        </Link>
                    </Nav>
                }



            </Navbar.Collapse >
        </Navbar >
    )
}

export default NavbarComponent