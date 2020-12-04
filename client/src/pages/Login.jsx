import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router-dom';
import '../styles/styles.css'


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
            <div className="bodyContainer">
               
                <div class="formContainer">
                    <form onSubmit={handleSubmit} className="form">
                        <label>
                            <input className="formInput" type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label>
                            <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </label>

                        <input className="formInput" type="submit" class="formSubmit" value="Login"/>

                    </form>
                </div>
            </div>
        </>
    )

}

export default Login