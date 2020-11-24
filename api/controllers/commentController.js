var express = require('express');


exports.commentListGet = function(req, res) {
    res.send(`all comments for blog  ${req.params.blogID}`)
}

exports.commentPost = function(req, res) {
    res.send(`create comment for blog  ${req.params.blogID}`)
}