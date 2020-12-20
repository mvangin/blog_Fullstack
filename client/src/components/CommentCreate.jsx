import React, { useState } from 'react'
import api from '../api'
import { Link } from "react-router-dom"

function CommentCreate({ postID, fetchData, user, displayName}) {


    const [content, setContent] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        if (content.trim() === "") {
            return
        }
        console.log("here" + displayName)
        let payload = { content, displayName, postID }
        console.log(payload)
        api.commentCreate(postID, payload)
            .then(() => fetchData())
        setContent("");
    }

    return (

        <form onSubmit={handleSubmit} className="createComment" >

            <textarea placeholder="Enter your comment here..." className="commentInput" type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />

            {user ?
                <div>
                    <button type="submit" className="commentSubmit"> Leave a comment </button>
                </div>
                :

                <Link to="/login" >
                    <button className="commentSubmit"> 
                        Please login to comment
                    </button>
                </Link>
            }

        </form>
    )
}

export default CommentCreate