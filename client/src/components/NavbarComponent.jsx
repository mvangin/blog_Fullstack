import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


function NavbarComponent({ user }) {
    return (
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            < Navbar.Brand>
                <Link to="/" className="nav-link text-light">
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
                <Nav >
                    <Nav>
                        <Link to="/posts" className="nav-link">
                            All Posts
                            </Link>
                    </Nav>
                </Nav>

                {user ?
                    <>
                        <Nav className="ml-auto">
                            <Link to="/logout" className="nav-link">
                                Logout <i>{user}</i>
                            </Link>
                        </Nav>
                    </>
                    :
                    <Nav className="ml-auto" >
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </Nav>
                }

            </Navbar.Collapse >
        </Navbar >
    )
}

export default NavbarComponent