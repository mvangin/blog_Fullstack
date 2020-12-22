import React from "react"
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'

function Homepage({ user }) {
    return (
        <>
            <Jumbotron fluid style={{ height: "82.9vh", marginBottom:"0px", backgroundImage:"url(/vesuvius.jpg)", backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
                    <div className="homepageContainer">
                        <div>
                            <h1>
                                SnoffleStein Blogs (Admin)
                            </h1>
                            {user ?
                                <div className="linkContainer">
                                    <Link to="/admin/posts" className="link">  <button className="homeLink">  Posts </button> </Link>
                                </div>
                                :
                                <div className="linkContainer">
                                    <Link to="/admin/login" className="link">  <button className="homeLink">  Sign In  </button> </Link>
                                </div>
                            }
                        </div>
                    </div>
            </Jumbotron>

        </>
    )
}

export default Homepage