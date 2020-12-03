import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList, PostCreate, PostUpdate, SignUp, Login, Logout, Post, Homepage } from '../pages'
import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/posts/" exact component={PostList} />
                <Route path="/posts/create" exact component={PostCreate} />
                <Route path="/posts/:id" component={Post} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={PostUpdate}
                />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
            </Switch>
        </Router>
    )
}

export default App