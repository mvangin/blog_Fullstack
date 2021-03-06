import React, { useState } from 'react'
import {Login, SignUp} from "../components"
import '../styles/styles.css'


function LoginSignup({setUser}) {

    const [login, setLogin] = useState(true);
    
    function handleLogin() {
        setLogin(true)
    }

    function handleSignup() {
        setLogin(false)
    }
    return (
        <div className="loginSignupCont">
            <div className="loginSignupBorder">
                <div className="userContainer">
                    <div onClick={() => handleLogin()} className="userChoice">
                        {login ? <h4>  <u> Login </u></h4> : <h4> Login </h4>}
                    </div>
                    <div onClick={() => handleSignup()} className="userChoice">
                        {login ? <h4 > Sign up</h4> : <h4 ><u> Sign up </u> </h4>}
                    </div>
                </div>
                {login ? <Login setUser={setUser} /> : <SignUp handleLogin={handleLogin}  />}
            </div>
        </div>
    )
}

export default LoginSignup