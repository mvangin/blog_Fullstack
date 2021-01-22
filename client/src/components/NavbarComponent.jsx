import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useState } from "react"
import ContactForm from "./ContactForm"
import Shop from "./Shop"

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

function NavbarComponent({ user, displayName }) {

    const [shopModalShow, setShopModalShow] = useState(false);

    const [contactModalShow, setContactModalShow] = useState(false);

    return (
        <Navbar className="navbarChange" collapseOnSelect expand="lg" bg="dark" variant="dark" >
            < Navbar.Brand>
                <Link to="/" className="nav-link">
                    <img src="/brandLogo.png" alt="Logo" style={{ width: "60px" }} />
                </Link>
            </Navbar.Brand >

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Navbar.Brand>
                    <Link to="/" className="nav-link text-light">
                        The Conflict Continuum
                    </Link>
                </Navbar.Brand >
                <Nav>
                    <Link to="/posts" className="nav-link allPosts">
                        All Blogs
                    </Link>
                </Nav>

                <Nav>
                    <Link onClick={() => setShopModalShow(true)} > <FontAwesomeIcon icon={faShoppingCart} className="shoppingIcon faShop" /> </Link>
                    <Shop
                        show={shopModalShow}
                        onHide={() => setShopModalShow(false)}
                    />
                </Nav>

                <Nav className="ml-auto social-media">
                    <div>
                        <a href="https://www.facebook.com/conflictarch/"> <FontAwesomeIcon className="fa" icon={faFacebook}  /> </a>
                        <a href="https://www.twitter.com/conflictarch/"> <FontAwesomeIcon className="fa" icon={faTwitter} /> </a>
                        <a href="https://www.instagram.com/theconflictcontinuum/"> <FontAwesomeIcon className="fa" icon={faInstagram} /> </a>
                    </div>
                </Nav>


                <Nav>
                    <Link onClick={() => setContactModalShow(true)} className="contactUs nav-link text-light"> Contact Us </Link>
                </Nav>

                <ContactForm
                    show={contactModalShow}
                    onHide={() => setContactModalShow(false)}
                />


                {user ?
                    <>
                        <Nav >
                            <Link to="/logout" className="nav-link text-light">
                                Logout <i>{displayName}</i>
                            </Link>
                        </Nav>
                    </>
                    :
                    <Nav >
                        <Link to="/login" className="nav-link text-light">
                            Login
                        </Link>
                    </Nav>
                }



            </Navbar.Collapse >
        </Navbar >
    )
}

export default NavbarComponent