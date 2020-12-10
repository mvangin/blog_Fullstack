import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom"
import api from '../api'


function PostUpdate({ match }) {
    const history = useHistory();
    let location = useLocation();

    console.log(location)
    const [title, setTitle] = useState(() => location ? location.state.postItem.title : null);
    const [content, setContent] = useState(() => location ? location.state.postItem.content : null);
    const [checked, setChecked] = useState(() => location ? location.state.postItem.published : null);
    let id = localStorage.getItem('id');

    let postID = match.params.id


    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() == "" || content.trim() == "") {
            return
        }

        api.updatePostByID(postID, { title, content, checked, postID})
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


                    <label className="postCheckedContainer"> 
                        Publish
                        <input type="checkbox" checked= {checked} onChange={() => setChecked(!checked)} className="postChecked"/>
                    </label>

                    <input type="submit" value="Update Post" className="postInput submit" />
                </form>
            </div>
        </>
    )

}
export default PostUpdate