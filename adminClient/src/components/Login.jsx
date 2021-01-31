import React, { useState } from 'react'
import api from '../api'
import { useHistory } from 'react-router-dom';
import '../styles/styles.css'
import jwt_decode from "jwt-decode";
import Spinner from 'react-bootstrap/Spinner';




function Login({ setUser }) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    function handleSubmit(e) {
        e.preventDefault();
        setError(null)
        setLoading(true)
        api.login({ username, password })
            .then(data => {
                let id = data.data.id;
                localStorage.setItem("token", data.data.token)
                localStorage.setItem("id", id)
                setLoading(false)
                history.push(`/admin/posts`);

                if (localStorage.getItem("token") !== null) {
                    let token = localStorage.getItem("token");
                    setUser(jwt_decode(token).name);
                } else {
                    return null;
                }
            }).catch(error => {
                setError(error.response.data.error)
            })
    }


    return (
        <>
            {loading &&
                <div className="d-flex justify-content-center ">
                    <Spinner animation="border" role="status" id="spinner"> </Spinner>
                </div>
            }

            <div className="bodyContainer">

                <div className="formContainer">

                    <form onSubmit={handleSubmit} className="form">
                        {error ? <li className="errors"> {error} </li> : null}

                        <label className="formLabel">
                            <input className="formInput" type="text" value={username} placeholder="Email" onChange={(e) => { setUsername(e.target.value) }} />
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