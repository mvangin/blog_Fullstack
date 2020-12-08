import React, { useState, useEffect } from "react";
import api from '../api'
import { useHistory } from "react-router-dom"


function PostCreate() {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let username = localStorage.getItem('id')

    useEffect(() => {
        //api.getPostCreate()
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
            <div className="createPostContainer">
                <form onSubmit={handleSubmit} className="postForm">
                    <label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder="title" className="postInput" />
                    </label>


                    <label>
                        <textarea rows="8" cols="80" type="text" value={content} onChange={(e) => { setContent(e.target.value); }} placeholder="content" className="postInput" />
                    </label>

                    <input type="submit" value="Create Post" className="postInput submit" />
                </form>
            </div>
        </>
    )

}
export default PostCreate