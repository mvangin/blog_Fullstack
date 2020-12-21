import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { useState } from "react"
import ContactForm from "../components/ContactForm"

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


                <Nav className="ml-auto">
                    <Link onClick={() => setModalShow(true)} className="contactUs mr-5 nav-link text-light"> Contact Us </Link>
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