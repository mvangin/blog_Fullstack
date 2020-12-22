import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom"
import api from '../api'
import ReactHtmlParser from 'react-html-parser';
import { Editor } from "@tinymce/tinymce-react";


function PostUpdate({ match }) {
    const history = useHistory();
    let location = useLocation();

    console.log(location)
    const [title, setTitle] = useState(() => location ? location.state.postItem.title : null);
    const [content, setContent] = useState(() => location ? location.state.postItem.content : null);
    const [checked, setChecked] = useState(() => location ? location.state.postItem.published : false);

    let postID = match.params.id


    function handleSubmit(e) {
        e.preventDefault();
        if (title.trim() == "" || content.trim() == "") {
            return
        }

        api.updatePostByID(postID, { title, content, checked, postID })
            .then(
                history.push(`/admin/posts`)
            ).catch(error => console.log(error))
    }

    return (
        <>
            <div className="container createPostContainer">
                <form onSubmit={handleSubmit} className="postForm">
                    <label>
                        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder="title" className="postInput" />
                    </label>

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
                        }} apiKey={process.env.REACT_APP_TINYMCE} value={content} onEditorChange={(content) => { setContent(content); }} placeholder="content" className="postInput" />
                    </label>


                    <label className="postCheckedContainer">
                        Publish
                        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="postChecked" />
                    </label>

                    <input type="submit" value="Update Post" className="postInput submit" />
                </form>
            </div>
        </>
    )

}
export default PostUpdate