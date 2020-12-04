import React, { useEffect, useState } from 'react'
import Login from "./Login"
import SignUp from "./SignUp"
import '../styles/styles.css'


function LoginSignup() {

    const [login, setLogin] = useState(false);

    function handleLogin() {
        setLogin(true)
    }

    function handleSignup() {
        setLogin(false)
    }
    return (
        <div class="loginSignupCont">
            <div class="loginSignupBorder">
                <div className="userContainer">
                    <div onClick={() => handleLogin()} className="userChoice">
                        {login ? <h4>  <u> Login </u></h4> : <h4> Login </h4>}
                    </div>
                    <div onClick={() => handleSignup()} className="userChoice">
                        {login ? <h4 > Signup</h4> : <h4 ><u> Signup </u> </h4>}
                    </div>
                </div>
                {login ? <Login /> : <SignUp handleLogin={handleLogin}  />}
            </div>
        </div>
    )
}

export default LoginSignup