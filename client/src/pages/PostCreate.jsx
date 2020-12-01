import React, { useState } from "react";
import api from '../api'
import {useHistory} from "react-router-dom"


function PostCreate() {
    const history = useHistory();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')

    function handleSubmit(e) {
        e.preventDefault();
        api.createPost({ title, content, username })
        history.push('/posts')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} />
            </label>


            <label>
                Content
            <input type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />
            </label>

            <input type="submit"/>
        </form>
    )

}
export default PostCreate