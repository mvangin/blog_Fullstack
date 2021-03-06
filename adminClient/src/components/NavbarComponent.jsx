import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


function NavbarComponent({ user }) {


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            < Navbar.Brand>
                <Link to="/admin">
                    <img src="/brandLogo.png" alt="Logo" style={{ width: "60px" }} />
                </Link>
            </Navbar.Brand >
            < Navbar.Brand>
                <Link to="/admin" className="nav-link text-light">
                    The Conflict Continuum (Admin)
                    </Link>
            </Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                {user ?
                    <>
                        <Nav>
                            <Link to="/admin/posts" className="nav-link">
                                All Posts
                            </Link>
                        </Nav>
                        < Nav className="mr-auto">
                            <Link to="/admin/posts/create" className="nav-link">
                                Create Posts
                                        </Link>
                        </Nav>

                        <Nav className="ml-auto tex-light">
                            <Link to="/admin/logout" className="nav-link">
                                Logout <i>{user}</i>
                            </Link>
                        </Nav>
                    </>
                    :
                    <Nav className="ml-auto" >
                        <Link to="/admin/login" className="nav-link">
                            Login
                        </Link>
                    </Nav>
                }

            </Navbar.Collapse >
        </Navbar >
    )
}

export default NavbarComponent