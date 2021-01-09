import React, { useState, useEffect } from "react";
import api from '../api'
import { Redirect } from "react-router-dom"
import { Editor } from "@tinymce/tinymce-react";
import { nanoid } from "nanoid"



function PostCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false)
    const [loaded, setLoaded] = useState(false);
    let username = localStorage.getItem('id');

    function handleSubmit(e) {
        e.preventDefault();

        api.createPost({ title, content, username, checked })
            .then(data => {
                setLoaded(true)
            }).catch(error => {
                setError(error.response.data.error)
            })
        //.then(history.push('/posts'))

    }


    return (

        <>
            {loaded ? <Redirect to='/admin/posts' /> : null}

            <div className="createPostContainer">
                <form onSubmit={handleSubmit} className="postForm">
                    {error ? <li style={{ color: "red" }}> {error} </li> : null}

                    <div className="text-center m-2">
                        Title
                    </div>

                    <label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value); }} className="postInput" />
                    </label>

                    {/*
                    <form onSubmit={handleUpload}>
                        <input type="file" />
                        <button type="button" type="submit" className="btn btn-primary"> Upload </button>
                    </form>
   
                    <label>
                        <Editor init={{
                            height: 200,
                            plugins: [
                                'image'
                            ],
                            menubar: 'insert image',
                            statusbar: 'false',
                            toolbar: 'false'
                        }}
                            apiKey={process.env.REACT_APP_TINYMCE} value={title} onEditorChange={(title) => { setTitle(title); }} className="postInput" />
                    </label>
                    */}

                    <div className="text-center m-2">
                        Content
                    </div>
                    <label>
                        <Editor init={{
                            height: 300,
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
                            apiKey={process.env.REACT_APP_TINYMCE} value={content} onEditorChange={(content) => { setContent(content); }} placeholder="content" className="postInput" />
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