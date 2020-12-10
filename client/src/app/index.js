import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList, Logout, Post, LoginSignup, Homepage } from '../pages'
import { NavbarComponent } from '../components'
import jwt_decode from "jwt-decode";

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    const [decTokenUser, setDecTokenUser] = useState(() => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token")
            return jwt_decode(token).name
        } else {
            return null;
        }
    }
    )


    return (
        <Router>

            <NavbarComponent user={decTokenUser}/>
            <Switch>
                <Route path="/" exact component={Homepage} />

                <Route path="/posts/" exact component={PostList} />
                <Route path="/posts/:id" exact render={({ match }) => <Post match={match} user={decTokenUser} />}/>

                <Route path="/logout" exact render={() => <Logout setUser={setDecTokenUser} />} />

                <Route path="/login" exact render={() => <LoginSignup setUser={setDecTokenUser}/>} />


            </Switch>
        </Router>
    )
}

export default App