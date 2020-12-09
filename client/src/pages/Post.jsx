import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import CommentCreate from "./CommentCreate"

function Post({ match, user }) {

    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    let postID = match.params.id


    async function fetchData() {
        await api.getPostByID(postID)
            .then(res => {
                setPost(res.data.posts);
                setComments(res.data.comments);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])

    return (
        <>
            <div className='postContainer'>
                <div className="sizeContainer">
                    <div>
                        <h1><b> {post.title}  </b>  </h1>

                        <div className="postAuthor">
                            By <i> {post.username ? post.username.username : null} </i>
                        </div>
                        <br />
                        {post.content}
                    </div>

                    <div>
                        <CommentCreate user={user} postID={postID} fetchData={fetchData} />
                    </div>

                    <div className="allCommentsContainer">
                        <b> Comments </b>

                        <div>
                            {
                                comments.map(comment => {
                                    return <div key={nanoid()} className="commentContainer">
                                        <img src="/avatar.jpg" style={{ width: "20px" }} alt="avatar" />
                                        {comment.username ?
                                            <span>
                                                <b>  {comment.username.username} </b>
                                            </span>
                                            : null}
                                        <div className="commentContent"> {comment.content} </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Post

