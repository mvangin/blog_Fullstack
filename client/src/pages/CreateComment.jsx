import React, {useState } from 'react'
import api from '../api'
import {useHistory} from "react-router-dom"


function CreateComment({ postID }) {

    const history = useHistory();

    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')


    function handleSubmit(e) {
        e.preventDefault();
        api.createComment({ content, username, postID })
        history.push('/posts')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">
                Content
        <input type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />
            </label>

            <input type="submit" />
        </form>
    )
}

export default CreateComment