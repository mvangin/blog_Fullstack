var express = require('express');
let User = require('../models/user')
var bcrypt = require('bcryptjs')
let Post = require('../models/post');
let Comment = require('../models/comment')
const { NotExtended } = require('http-errors');
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

    if (!content || !title) {
        return res.status(400).json({
            success: false,
            error: "you must provide title and content"
        })
    }

    const post = new Post({ title, content, username })

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

exports.blogPut = function (req, res) {
    id = req.params.postID;
    Post.findByIdAndUpdate(id, {published: true})

}

exports.blogDelete = function (req, res) {
    Post.findByIdAndDelete(req.params.postID, function(err) {
        if (err) {
            next(err)
        }
    
            console.log("successfully delete blog")
            res.json({success: true})
    })
}