var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blogController')
var commentController = require('../controllers/commentController')
var userController = require('../controllers/userController')
var passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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


module.exports = router;
