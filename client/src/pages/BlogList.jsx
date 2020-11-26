import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'

import styled from 'styled-components'

//import 'react-table/react-table.css'

function BlogList() {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        let accessString = localStorage.getItem('token')
        if (accessString === null) {
            setIsLoading(false)
            console.log("no token")
        }


        console.log("heelo")
        setIsLoading(true)
        async function fetchData() {
            await api.getAllBlogs().then(blogsRec => {
                setBlogs(blogsRec.data.data);
                setIsLoading(false);
            })
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                blogs.map((item) => {
                    return (<div key={nanoid()}> {item.title} : {item.content} </div>)
                })
            }
        </div>

    )

}


export default BlogList


