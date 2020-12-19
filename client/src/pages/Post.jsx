import React, { useEffect, useState } from 'react'
import api from '../api'
import { nanoid } from 'nanoid'
import CommentCreate from "./CommentCreate"
import ReactHtmlParser from 'react-html-parser';


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
            <div className='postContainer container'>
                <div className="sizeContainer">
                    <div class="postTitleContainer">
                        <h1><b> {post.title}  </b>  </h1>
                        <div className="postAuthor">
                            By <i> {post.username ? post.username.username : null} </i>
                        </div>
                    </div>
                    <div>

                        <br />
                        {ReactHtmlParser(post.content)}
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

