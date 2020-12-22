import React, { useState } from 'react'
import api from '../api'


function CommentCreate({ postID, fetchData }) {


    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (content.trim() === "") {
            return
        }

        let displayName = "ADMIN"
        let payload = { content, displayName, postID }
        console.log(payload)
        api.commentCreate(postID, payload)
            .then(() => fetchData())
        setContent("");
    }

    return (

        <form onSubmit={handleSubmit} className="createComment" >

            <textarea placeholder="Enter your comment here..." className="commentInput" type="text" value={content} onChange={(e) => { setContent(e.target.value);}} />

            <div>
                <button type="submit" className="commentSubmit"> Leave a comment </button>
            </div>

        </form>
    )
}

export default CommentCreate