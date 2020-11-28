import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BlogList, BlogCreate, BlogUpdate, SignUp, Login, Logout} from '../pages'
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
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/login" exact component ={Login}/>
                <Route path="/logout" exact component={Logout}/>
            </Switch>
        </Router>
    )
}

export default App