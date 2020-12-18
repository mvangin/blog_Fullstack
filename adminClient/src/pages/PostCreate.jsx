import React, { useState, useEffect } from "react";
import api from '../api'
import { Redirect } from "react-router-dom"
import { Editor } from "@tinymce/tinymce-react";



function PostCreate() {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false)
    const [loaded, setLoaded] = useState(false);
    let username = localStorage.getItem('id');




    useEffect(() => {
        //api.getPostCreate()
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() === "" || content.trim() === "") {
            return
        }

        api.createPost({ title, content, username, checked })
            .then(response => setLoaded(true))
        //.then(history.push('/posts'))
    }

    //add error handling

    return (

        <>
            {loaded ? <Redirect to='/admin/posts' /> : null}

            <div className="createPostContainer">
                <form onSubmit={handleSubmit} className="postForm">
                    <label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value); }} placeholder="title" className="postInput" />
                    </label>

                    <label>
                        <Editor init={{
                            height:300,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                 alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                            apiKey="izb6wun1mfx6s4yw07jgv1cha30fjzeyuzsc9npti5tlo8hk" value={content} onEditorChange={(content) => { setContent(content); }} placeholder="content" className="postInput" />
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