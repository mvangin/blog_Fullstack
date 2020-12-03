import React from "react"

function Logout() {

    localStorage.removeItem('token')
    localStorage.removeItem('id')



    return (
        <h3> You have been logged out </h3>
    )
}

export default Logout