import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList, Post, LoginSignup, Homepage } from '../pages'
import { NavbarComponent, Logout} from '../components'
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

    const [decDisplayName, setDecDisplayName] = useState(() => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token")
            return jwt_decode(token).displayName
        } else {
            return null;
        }
    }
    )



    return (
        <Router>

            <NavbarComponent user={decTokenUser} displayName={decDisplayName}/>
            <Switch>
                <Route path="/" exact render={() => <Homepage user={decTokenUser} />} />

                <Route path="/posts/" exact component={PostList} />
                <Route path="/posts/:id" exact render={({ match }) => <Post match={match} displayName={decDisplayName} user={decTokenUser} />} />

                <Route path="/logout" exact render={() => <Logout setUser={setDecTokenUser} setDisplayName={setDecDisplayName} />} />

                <Route path="/login" exact render={() => <LoginSignup setUser={setDecTokenUser} setDisplayName={setDecDisplayName}/>} />


            </Switch>
        </Router>
    )
}

export default App