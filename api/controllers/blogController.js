let Post = require('../models/post');
let Comment = require('../models/comment')
let async = require('async')

exports.blogsListGet = async function (req, res) {
    await Post.find({})
        .populate('username')
        .exec(function (err, posts) {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!posts.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `No blogs found` })
            }

            return res.status(200).json({ success: true, data: posts })
        })
}

exports.blogPost = function (req, res) {
    const title = req.body.title;
    const content = req.body.content;
    const username = req.body.username;
    const published = req.body.checked

    if (!content || !title) {
        let error = "you must provide title and content"
        return res.json({
            success: false,
            error: error.array()
        })
    }

    const post = new Post({ title, content, username, published })

    if (!post) {
        return res.status(400).json({ success: false, error: err })
    }

    post
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: post._id,
                message: "blog created"
            })
        }).catch(err => {
            return res.status(400).json({
                err,
                message: "blog not created",
            })
        })

}

exports.getPostCreate = function (req, res) {
    res.send('create blogpost')
}


exports.blogGet = function (req, res) {
    async.parallel({
        posts: function (callback) {
            Post.findById(req.params.postID)
                .populate('username')
                .exec(callback)
        },
        comments: function (callback) {
            console.log(req.body)
            Comment.find({ post: req.params.postID })
                .populate('username')
                .exec(callback)
        },
    }, function (err, results) {
        if (err) {
            return next(err)
        }
        res.status(201).json({ posts: results.posts, comments: results.comments })
    })
}

exports.blogUpdate = function (req, res) {

        //let post = new Post({title: req.body.title, content:req.body.content, })

        Post.findByIdAndUpdate(req.params.postID, {title:req.body.title, content:req.body.content, published: req.body.checked})
        .then(() => {
            return res.status(201).json({
                success: true,
                message: "blog update"
            })
        }).catch(err => {
            return res.status(400).json({
                err,
                message: "blog not updated",
            })
        })
}


exports.blogDelete = function (req, res) {
    Post.findByIdAndDelete(req.params.postID, function (err) {
        if (err) {
            next(err)
        }

        console.log("successfully delete blog")
        res.json({ success: true })
    })
}