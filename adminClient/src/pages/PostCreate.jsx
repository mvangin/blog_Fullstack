import React, { useState, useEffect } from "react";
import api from '../api'
import { Redirect, useHistory, useLocation } from "react-router-dom"


function PostCreate() {
    let location = useLocation();


    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [checked, setChecked] = useState(false);
    const [loaded, setLoaded] = useState(false);
    let username = localStorage.getItem('id');



    useEffect(() => {
        //api.getPostCreate()
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() == "" || content.trim() == "") {
            return
        }

        api.createPost({ title, content, username, checked })
            .then(response => setLoaded(true))
        //.then(history.push('/posts'))
    }

    return (

        <>
            {loaded ? <Redirect to='/posts' /> : null}

            <div className="createPostContainer">
                <form onSubmit={handleSubmit} className="postForm">
                    <label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value); }} placeholder="title" className="postInput" />
                    </label>


                    <label>
                        <textarea rows="8" cols="80" type="text" onChange={(e) => { setContent(e.target.value); }} placeholder="content" className="postInput" />
                    </label>

                    <label className="postCheckedContainer">
                        Publish
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="postChecked" />
                    </label>


                    <input type="submit" value="Create Post" className="postInput submit" />
                </form>
            </div>
        </>
    )

}
export default PostCreate