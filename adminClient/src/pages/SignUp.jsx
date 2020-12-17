import React, { useState } from 'react'
import api from '../api'
import '../styles/styles.css'



function SignUp({ handleLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            return
        }
        e.preventDefault();
        api.signUp({ username, password })
            .then(data => {
                if (data.data.error) {
                    setError(data.data.error)
                } else {
                    handleLogin(true)
                    console.log("logged")
                }
            })

    }
    return (
        <>
            <div className="bodyContainer">

                {/*submitted ? <Redirect to="/login" /> : null*/}

                <div className="formContainer">
                    <form onSubmit={handleSubmit} className="form">
                        {error ? <div className="loginError"> {error} </div> : null}

                        <label className="formLabel">
                            <input className="formInput" type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className="formLabel">
                            <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </label>

                        <input className="formInput submit" type="submit" value="Sign up" />

                    </form>
                </div>
            </div>
        </>
    )

}

export default SignUp