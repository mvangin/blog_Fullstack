import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BlogList, BlogCreate, BlogUpdate } from '../pages'
import { NavBar } from '../components'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/blogs/" exact component={BlogList} />
                <Route path="/blogs/create" exact component={BlogCreate} />
                <Route
                    path="/movies/update/:id"
                    exact
                    component={BlogUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App