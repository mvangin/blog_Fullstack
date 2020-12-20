import React, { useState } from 'react'
import api from '../api'
import { useHistory } from 'react-router-dom';
import '../styles/styles.css'
import jwt_decode from "jwt-decode";



function Login({ setUser, setDisplayName }) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();

        api.login({ username, password })
            .then(data => {
                if (data.data.error) {
                    setError(data.data.error)
                }
                else {
                    let id = data.data.id;
                    localStorage.setItem("token", data.data.token)
                    localStorage.setItem("id", id)
                    history.push(`/posts`);
                    console.log("displayName1212" + jwt_decode(data.data.token).displayName)


                    setDisplayName(jwt_decode(data.data.token).displayName)

                    setUser(jwt_decode((data.data.token)).name);

                }
            })
    }

    return (
        <>
            <div className="bodyContainer">

                <div className="formContainer">
                    <form onSubmit={handleSubmit} className="form">
                        {error ? <li className="loginError"> {error} </li> : null}

                        <label className="formLabel">
                            <input className="formInput" type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className="formLabel">
                            <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </label>


                        <input className="formInput submit" type="submit" value="Login" />

                    </form>
                </div>
            </div>
        </>
    )

}

export default Login