import React, { useState } from 'react'
import {Login, SignUp} from "../components"
import '../styles/styles.css'
import Container from "react-bootstrap/Container"



function LoginSignup({ setUser, setDisplayName }) {

    const [login, setLogin] = useState(true);
    function handleLogin() {
        setLogin(true)
    }

    function handleSignup() {
        setLogin(false)
    }
    return (
        <Container className="dflex justify-center align-center loginSignupContainer">
            <div className="loginSignupCont">
                <div className="loginSignupBorder">
                    <div className="userContainer">
                        <div onClick={() => handleLogin()} className="userChoice">
                            {login ? <h4>  <u> Login </u> </h4> : <h4> Login </h4>}
                        </div>
                        <div onClick={() => handleSignup()} className="userChoice">
                            {login ? <h4 > Sign up</h4> : <h4 ><u> Sign up </u> </h4>}
                        </div>
                    </div>
                    {login ? <Login setUser={setUser} setDisplayName={setDisplayName} /> : <SignUp handleLogin={handleLogin} />}
                </div>
            </div>
        </Container>
    )
}

export default LoginSignup