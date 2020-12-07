import React from "react"
import {Link} from "react-router-dom"


function Logout({setUser}) {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setUser(null)



    return (
        <div className="homepageContainer">
        <div>
            <h1>
                You have been logged out
        </h1>
            <div className="linkContainer">
                <button className="homeLink"> <Link to="/posts" className="link"> View Blogs </Link> </button>
                <button className="homeLink"> <Link to="/login" className="link"> Sign In </Link>  </button>
            </div>
        </div>
    </div>
    )
}

export default Logout