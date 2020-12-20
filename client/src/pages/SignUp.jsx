import React, { useState } from 'react'
import api from '../api'
import {nanoid} from "nanoid"
import '../styles/styles.css'



function SignUp({ handleLogin }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [marketing, setMarketing] = useState(true)
    const [displayName, setDisplayName] = useState("")

    //const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState(null)


    function handleSubmit(e) {
        e.preventDefault();

        api.signUp({ username, password, marketing, displayName })
            .then(data => {
                console.log(data)
                if (data.data.errors) {
                    setErrors(data.data.errors)
                } else {
                    handleLogin()
                }
            })

    }

    return (
        <>
            <div className="bodyContainer">

                {/*submitted ? <Redirect to="/login" /> : null*/}

                <div className="formContainer">
                    <form onSubmit={handleSubmit} className="form">

                      { errors ? errors.map(error => (<li key={nanoid()} className="errors"> {error.msg} </li> )): null }

                      <label className="formLabel">
                            <input className="formInput" type="text" value={displayName} placeholder="Display name" onChange={(e) => { setDisplayName(e.target.value) }} />
                        </label>

                        <label className="formLabel">
                            <input className="formInput" type="text" value={username} placeholder="Email" onChange={(e) => { setUsername(e.target.value) }} />
                        </label>


                        <label className="formLabel">
                            <input className="formInput" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </label>

                        <label>
                            Would you like to receive new and exciting updates?
                        <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} className="marketingUpdates" />
                        </label>


                        <input className="formInput submit" type="submit" value="Sign up" />

                    </form>
                </div>
            </div>
        </>
    )

}

export default SignUp