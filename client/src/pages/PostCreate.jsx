import React, { useState, useEffect } from "react";
import api from '../api'
import { useHistory } from "react-router-dom"


function PostCreate() {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')

    useEffect(() => {
        api.getPostCreate()
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() == "" || content.trim() == "") {
            return
        }

        api.createPost({ title, content, username })
            .then(history.push('/posts'))
    }

    return (
        <>
            <h1> CREATE POST</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} />
                </label>


                <label>
                    Content
            <input type="text" value={content} onChange={(e) => { setContent(e.target.value); }} />
                </label>

                <input type="submit" />
            </form>
        </>
    )

}
export default PostCreate