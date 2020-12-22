import React, {useState } from 'react'
import api from '../api'
import { useHistory } from 'react-router-dom';
import '../styles/styles.css'
import jwt_decode from "jwt-decode";




function Login({ setUser }) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null)


    function handleSubmit(e) {
        e.preventDefault();
        api.login({ username, password})
            .then(data => {
                if (data.data.error) {
                    setError(data.data.error)
                } else {
                    let id = data.data.id;
                    localStorage.setItem("token", data.data.token)
                    localStorage.setItem("id", id)
                    history.push(`/admin/posts`);

                    if (localStorage.getItem("token") !== null) {
                        let token = localStorage.getItem("token");
                        setUser(jwt_decode(token).name);
                    } else {
                        return null;
                    }
                }
            })
    }

    return (
        <>
            <div className="bodyContainer">

                <div className="formContainer">

                    <form onSubmit={handleSubmit} className="form">
                    {error ? <li className="errors"> {error} </li> : null}

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