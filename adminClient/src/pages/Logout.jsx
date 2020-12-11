import React from "react"
import { Link } from "react-router-dom"


function Logout({ setUser }) {
    localStorage.removeItem('token')
    localStorage.removeItem('id')




    return (
        <div className="homepageContainer">

            {setUser(null)}

            <div>
                <h1>
                    You have been logged out
        </h1>
                <div className="linkContainer">
                    <Link to="/posts" className="link"><button className="homeLink"> View Blogs </button> </Link>
                    <Link to="/login" className="link">  <button className="homeLink">  Sign In  </button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Logout