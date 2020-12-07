import React, { useState } from 'react'
import api from '../api'
import { useHistory } from "react-router-dom"


function CommentCreate({ postID, fetchData }) {

    const history = useHistory();

    const [content, setContent] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        e.preventDefault();
        if (content.trim() == "") {
            return
        }

        let username = localStorage.getItem('id')
        let payload = { content, username, postID }
        console.log(payload)
        api.commentCreate(postID, payload)
            .then(() => fetchData())
        setContent("");
    }

    return (

        <form onSubmit={handleSubmit} className="createComment" >

            <textarea placeholder="Enter your comment here..." className="commentInput" type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />


            <div>
                <button type="submit" class="commentSubmit"> Leave a comment </button>
            </div>

        </form>
    )
}

export default CommentCreate