import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList, PostCreate, PostUpdate, Logout, Post, LoginSignup, Homepage } from '../pages'
import { NavbarComponent } from '../components'
import jwt_decode from "jwt-decode";

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

    const [posts, setPosts] = useState([]);

    const [decTokenUser, setDecTokenUser] = useState(() => {
        if (localStorage.getItem("token") !== null) {
            let token = localStorage.getItem("token")
            return jwt_decode(token).name
        } else {
            return null;
        }
    })

    return (
        <Router>

            <NavbarComponent user={decTokenUser} />
            <Switch>
                <Route path="/admin" exact component={Homepage} />

                <Route path="/admin/posts" exact render={()=><PostList posts={posts} setPosts={setPosts} />} />
                <Route path="/admin/posts/create" exact component={PostCreate} />
                <Route path="/admin/posts/:id" exact render={({ match }) => <Post match={match} user={decTokenUser} posts={posts} setPosts={setPosts} />}/>
                <Route
                    path="/admin/posts/:id/update"
                    exact
                    component={PostUpdate}
                />

                <Route path="/admin/logout" exact render={() => <Logout setUser={setDecTokenUser} />} />

                <Route path="/admin/login" exact render={() => <LoginSignup setUser={setDecTokenUser} />} />


            </Switch>
        </Router>
    )
}

export default App