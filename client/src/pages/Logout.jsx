import React from "react"

function Logout({setUser}) {

    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setUser(null)



    return (
        <h3> You have been logged out </h3>
    )
}

export default Logout