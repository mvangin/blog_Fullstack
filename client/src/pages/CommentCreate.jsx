import React, {useState } from 'react'
import api from '../api'
import {useHistory} from "react-router-dom"


function CommentCreate({ postID, fetchData}) {

    const history = useHistory();

    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')


    function handleSubmit(e) {
        e.preventDefault();
        let payload = {content, username, postID}
        api.commentCreate(postID, payload)
        .then(()=>fetchData())
        setContent("");
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

export default CommentCreate