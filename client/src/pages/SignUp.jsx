import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'


function SignUp() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        api.signUp({ username, password })
    }

    

    return (
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

    )

}

export default SignUp