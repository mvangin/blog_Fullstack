import React from "react"
import { Redirect } from "react-router-dom"



function Logout({ setUser, setDisplayName }) {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('displayName')

    setUser(null)
    setDisplayName(null)
    

    return (
        <Redirect to="/" />
    )
}

export default Logout