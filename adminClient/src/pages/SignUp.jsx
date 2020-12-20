import React, { useState } from 'react'
import api from '../api'
import '../styles/styles.css'
import {nanoid} from "nanoid"



function SignUp({ handleLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState(null)
    const [adminPassword, setAdminPassword] = useState("");


    function handleSubmit(e) {

        e.preventDefault();
        api.signUp({ username, password, adminPassword})
            .then(data => {
                console.log(data)
                if (data.data.errors) {
                    setErrors(data.data.errors)
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
                        {errors ? errors.map(error => (<li key={nanoid()} className="errors"> {error.msg} </li>)) : null}

                        <label className="formLabel">
                            <input className="formInput" type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className="formLabel">
                            <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </label>

                        <label className="formLabel">
                            <input className="formInput" type="password" placeholder="Admin Password" value={adminPassword} onChange={(e) => { setAdminPassword(e.target.value) }} />
                        </label>

                        <input className="formInput submit" type="submit" value="Sign up" />

                    </form>
                </div>
            </div>
        </>
    )

}

export default SignUp