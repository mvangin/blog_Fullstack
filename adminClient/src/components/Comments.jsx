import React from 'react'
import api from '../api'
import { nanoid } from 'nanoid'

function Comments({comments, setComments,postID}) {

    function handleCommentDelete(commentID) {
        api.deleteCommentByID(postID, commentID)
            .then(() => {
                setComments(comments.filter((comment => comment._id !== commentID)));
            })
    }

    return (
        <div className="allCommentsContainer">
            <b> Comments </b>
            <div>
                {
                    comments.map(comment => {
                        return <div key={nanoid()} className="commentContainer">
                            <img src="/avatar.jpg" style={{ width: "20px" }} alt="avatar" />

                            {comment.displayName ?
                                <span>
                                    <b> {comment.displayName} </b>
                                </span>
                                : null}

                            <div className="commentContent">
                                {comment.content}
                            </div>
                            <button className="commentDelete" onClick={() => handleCommentDelete(comment._id)}>  Delete </button>
                        </div>
                    })
                }

            </div>
        </div>

    )
}

export default Comments