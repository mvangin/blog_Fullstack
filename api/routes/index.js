var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blogController')
var commentController = require('../controllers/commentController')
var userController = require('../controllers/userController')
var passport = require('passport')


//get login
router.get('/login', userController.loginGet)

//post login
router.post('/login', userController.loginPost)

//get signup
router.get('/signup', userController.signupGet)

// post signup
router.post('/signup', userController.signupPost)


//get all blogs
router.get('/posts', blogController.blogsListGet)
//router.get('/posts', passport.authenticate('jwt', {session: false}), blogController.blogsListGet)


//new blog form
router.get('/posts/create',  passport.authenticate('jwt', {session: false}), blogController.getPostCreate)

//create blog
router.post('/posts', blogController.blogPost)

//get specific blog
router.get('/posts/:postID', blogController.blogGet)


//update blog
router.put('/posts/:postID', blogController.blogUpdate)

//delete blog
router.delete('/posts/:postID', blogController.blogDelete)


//get all comments of specific blog post
router.get('/posts/:postID', commentController.commentListGet)

//post comment on specific blog post
//router.post('/posts/:postID', commentController.commentPost)
router.post('/posts/:postID', passport.authenticate('jwt', {session: false}), commentController.commentPost)

router.delete('/posts/:postID/:commentID', commentController.commentDelete)


////// admin routes

//get login
router.get('/admin/login', userController.loginGet)

//post login
router.post('/admin/login', userController.loginPost)

//get signup
router.get('/admin/signup', userController.signupGet)

// post signup
router.post('/admin/signup', userController.signupPost)


//get all blogs
router.get('/admin/posts', passport.authenticate('jwt', {session: false}), blogController.blogsListGet)
//router.get('/posts', passport.authenticate('jwt', {session: false}), blogController.blogsListGet)


//new blog form
router.get('/admin/posts/create',  passport.authenticate('jwt', {session: false}), blogController.getPostCreate)

//create blog
router.post('/admin/posts', passport.authenticate('jwt', {session: false}), blogController.blogPost)

//get specific blog
router.get('/admin/posts/:postID', passport.authenticate('jwt', {session: false}), blogController.blogGet)


//update blog
router.put('/admin/posts/:postID', passport.authenticate('jwt', {session: false}), blogController.blogUpdate)

//delete blog
router.delete('/admin/posts/:postID', passport.authenticate('jwt', {session: false}), blogController.blogDelete)


//get all comments of specific blog post
router.get('/admin/posts/:postID', passport.authenticate('jwt', {session: false}), commentController.commentListGet)

//post comment on specific blog post
//router.post('/posts/:postID', commentController.commentPost)
router.post('/admin/posts/:postID', passport.authenticate('jwt', {session: false}), commentController.commentPost)

router.delete('/admin/posts/:postID/:commentID', passport.authenticate('jwt', {session: false}), commentController.commentDelete)

module.exports = router;
