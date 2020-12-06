import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


function NavbarComponent({ user }) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            < Navbar.Brand>
                <Link to="/" className="nav-link text-light">
                    SnoffleStein Blogs
                </Link>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav>
                        <Link to="/posts" className="nav-link">
                            List Posts
                            </Link>
                    </Nav>
                    <Nav>
                        <Link to="/posts/create" className="nav-link">
                            Create Posts
                            </Link>
                    </Nav>

                </Nav>
                {user ?
                    <Nav className="ml-auto">
                        <Link to="/logout" className="nav-link">
                            Logout {user}
                        </Link>
                    </Nav>
                    :
                    <Nav>
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