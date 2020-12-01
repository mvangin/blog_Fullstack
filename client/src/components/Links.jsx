import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom';


const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

function Links() {

    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                My first MERN Application
                </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/posts" className="nav-link">
                            List Posts
                            </Link>
                    </Item>
                    <Item>
                        <Link to="/posts/create" className="nav-link">
                            Create Posts
                            </Link>
                    </Item>
                    <Item>
                        <Link to="/signup" className="nav-link">
                            SignUp
                            </Link>
                    </Item>
                    <Item>
                        <Link to="/login" className="nav-link">
                            Login
                            </Link>
                    </Item>
                    <Item>
                    <Link to="/logout" className="nav-link">
                            Logout
                    </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links