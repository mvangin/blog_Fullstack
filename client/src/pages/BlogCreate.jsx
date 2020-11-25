import React, { useState } from "react";
import api from '../api'


function BlogCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        api.createBlog({ title, content })
        console.log("yup")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); console.log(e.target.value) }} />
            </label>


            <label>
                Content
            <input type="text" value={content} onChange={(e) => { setContent(e.target.value); console.log(e.target.value) }} />
            </label>

            <input type="submit"/>
        </form>
    )

}
export default BlogCreate