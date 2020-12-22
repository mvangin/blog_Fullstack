let Comment = require('../models/comment')


exports.commentListGet = function (req, res) {
    res.send(`all comments for blog  ${req.params.postID}`)
}

exports.commentPost = function (req, res) {
    let content = req.body.content;
    let displayName = req.body.displayName;
    let post = req.body.postID;

    if (!content) {
        return res.status(400).json({
            success: false,
            error: "you must provide content"
        })
    }
    
    const comment = new Comment({ displayName, content, post })

    comment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: comment._id,
                message: "comment created"
            })
        }).catch(err => {
            return res.status(400).json({
                err,
                message: "comment not created",
            })
        })
}

exports.commentDelete = function (req, res, next) {
    Comment.findByIdAndDelete(req.params.commentID, function (err) {
        if (err) {
            return res.status(400).json({
                deleted: false,
            })
        }
        console.log("successfully deleted comment")
        res.json({ success: true })
    })
}