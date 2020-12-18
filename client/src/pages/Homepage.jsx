import React from "react"
import { Link } from 'react-router-dom'

function Homepage({ user }) {
    return (
        <div className="homepageContainer">
            <div>
                <h1>
                    Welcome to SnoffleStein Blogs
                </h1>
                {
                user ?
                    <div className="linkContainer">
                        <Link to="/posts" className="link"><button className="homeLink"> View Blogs </button> </Link>
                    </div>
                    :
                    <div className="linkContainer">
                        <Link to="/posts" className="link"><button className="homeLink"> View Blogs </button> </Link>
                        <Link to="/login" className="link">  <button className="homeLink">  Sign In  </button> </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Homepage