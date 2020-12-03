import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Redirect } from 'react-router-dom';



function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        api.signUp({ username, password })
        setSubmitted(true)
    }

    return (
        <>
            <h1> SIGN UP </h1>
            {submitted ? <Redirect to="/login" /> : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); console.log(e.target.value) }} />
                </label>


                <label>
                    Password
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); console.log(e.target.value) }} />
                </label>

                <input type="submit" />
            </form>
        </>

    )

}

export default SignUp