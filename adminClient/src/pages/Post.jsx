import React, { useEffect, useState } from 'react'
import api from '../api'
import CommentCreate from "../components/CommentCreate"
import Comments from "./Comments"
import { useHistory, Link } from "react-router-dom"
import ReactHtmlParser from 'react-html-parser';



function Post({ match, setPosts, posts }) {

    const [postItem, setPostItem] = useState([]);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    let postID = match.params.id

    const history = useHistory();



    async function fetchData() {
        await api.getPostByID(postID)
            .then(res => {
                setPostItem(res.data.posts);
                setComments(res.data.comments);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])

    function handlePostDelete() {
        comments.forEach((comment) => {
            api.deleteCommentByID(postID, comment._id)
        })

        api.deletePostByID(postID)
            .then(() => {
                setPosts(posts.filter((post => post._id !== postID)));
                history.push(`/admin/posts`);
            })

    }
    return (
        <>
            <div className='postContainer'>
                <div className="sizeContainer">
                    <div>
                        <div>
                            <h1 className="postTitle"><b> {postItem.title}  </b> </h1>
                            <button className="postDelete" onClick={handlePostDelete}> Delete </button>
                            <Link to={{ pathname:`/admin/posts/${postItem._id}/update`, state: { postItem }}}>
                                <button className="postUpdate">
                                    Update
                              </button>
                            </Link>
                        </div>

                        <div style={{ clear: "both" }} className="postAuthor">
                            By <i> {postItem.username ? postItem.username.username : null} </i>
                        </div>
                        <br />
                        {ReactHtmlParser(postItem.content)}
                    </div>

                    <div>
                        <CommentCreate postID={postID} fetchData={fetchData} />
                    </div>

                    <Comments comments={comments} setComments={setComments} />
                </div>
            </div>

        </>
    )

}

export default Post

