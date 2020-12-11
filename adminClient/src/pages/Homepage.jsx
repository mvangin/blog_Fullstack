import React from "react"
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className="homepageContainer">
            <div>
                <h1>
                    SnoffleStein Blogs Administrative Site
            </h1>
                <div className="linkContainer">
                   <Link to="/admin/login" className="link">  <button className="homeLink">  Sign In  </button> </Link> 
                </div>
            </div>
        </div>
    )
}

export default Homepage