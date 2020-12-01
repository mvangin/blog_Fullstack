var express = require('express');
let User = require('../models/user')
var bcrypt = require('bcryptjs')
let Post = require('../models/post');
const { NotExtended } = require('http-errors');

exports.blogsListGet = async function (req, res) {
    await Post.find({})
    .populate('username')
    .exec(function(err, posts) {
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

exports.blogCreateGet = function (req, res) {
    res.send('create blogpost')
}


exports.blogGet = function (req, res) {
    Post.findById(req.params.postID, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        res.status(201).json({data})
    })
}

exports.blogPut = function (req, res) {
    res.send(`edit specific blog ${req.params.postID}`)
}

exports.blogDelete = function (req, res) {
    res.send(`delete specific blog ${req.params.postID}`)
}




