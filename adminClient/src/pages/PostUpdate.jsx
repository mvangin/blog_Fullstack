import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom"



function PostUpdate() {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    let username = localStorage.getItem('id');


    let location = useLocation();

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
                        <input type="text" value={location ?  location.state.postItem.title : null} onChange={(e) => { setTitle(e.target.value); }} placeholder="title" className="postInput" />
                    </label>


                    <label>
                        <textarea rows="8" cols="80" type="text" value={location ?  location.state.postItem.content : null} onChange={(e) => { setContent(e.target.value); }} placeholder="content" className="postInput" />
                    </label>

                    <input type="submit" value="Create Post" className="postInput submit" />
                </form>
            </div>
        </>
    )

}
export default PostUpdate