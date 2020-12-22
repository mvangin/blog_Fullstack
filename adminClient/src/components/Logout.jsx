import React from "react"
import { Redirect } from "react-router-dom"


function Logout({ setUser }) {
    
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setUser(false)


    return (
            <Redirect to="/" />
    )
}

export default Logout