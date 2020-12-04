import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Redirect } from 'react-router-dom';
import '../styles/styles.css'



function SignUp({handleLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        if (username.trim() == "" || password.trim() == "") {
            return
        }
        e.preventDefault();
        api.signUp({ username, password })
        handleLogin(true)
    }

    return (
        <>
        <div className="bodyContainer">
            
            {/*submitted ? <Redirect to="/login" /> : null*/}

            <div class="formContainer">
                <form onSubmit={handleSubmit} className="form">
                    <label>
                        <input className="formInput" type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                    </label>


                    <label>
                        <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </label>

                    <input className="formInput" type="submit" class="formSubmit" value="Signup"/>

                </form>
            </div>
        </div>
    </>
    )

}

export default SignUp