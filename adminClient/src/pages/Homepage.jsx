import React from "react"
import { Link } from 'react-router-dom'

function Homepage({user}) {
    return (
        <div className="container homepageContainer">
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
    )
}

export default Homepage