import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router-dom';


function Login() {

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        e.preventDefault();
        if (username.trim() == "" || password.trim() == "") {
            return
        }
        api.login({ username, password })
        .then(data => {
            let id = data.data.id;
            localStorage.setItem("token", data.data.token)
            localStorage.setItem("id", id)
            history.push(`/posts`);
           //window.location.reload();


            
        })
    }

    return (
        <>
        <h1> LOGIN </h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </label>


            <label>
                Password
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </label>

            <input type="submit" />
        </form>
        </>
    )

}

export default Login