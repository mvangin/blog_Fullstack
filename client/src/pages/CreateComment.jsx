import React, {useState } from 'react'
import api from '../api'
import {useHistory} from "react-router-dom"


function CreateComment({ postID }) {

    const history = useHistory();

    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')


    function handleSubmit(e) {
        e.preventDefault();
        api.createComment(postID, { content, username, postID })
        history.push('/posts')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">
                
        <input type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />
            </label>

            <button type="submit"> Post Comment </button>
        </form>
    )
}

export default CreateComment