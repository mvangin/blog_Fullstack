import React from "react"

function Logout() {

    localStorage.removeItem('token')


    return (
        <div>
            You have been logged out
        </div>
    )
}

export default Logout