import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import {nanoid} from 'nanoid'

import styled from 'styled-components'

//import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBlogs().then(blogs => {
            this.setState({
                blogs: blogs.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        let keyIndex = 0
        return (
            <div>
                {
                    this.state.blogs.map((item, key) =>  {
                    return (<div key={nanoid()}> {item._id} </div>)
                })
                }
            </div>

        )

    }
}

export default BlogList