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
router.get('/blogs', blogController.blogsListGet)
//router.get('/blogs', passport.authenticate('jwt', {session: false}), blogController.blogsListGet)

//new blog form
router.get('/blogs/create', blogController.blogCreateGet)

//create blog
router.post('/blogs', blogController.blogPost)

//get specific blog
router.get('/blogs/:blogID', blogController.blogGet)


//update blog
router.put('/blogs/:blogID', blogController.blogPut)

//delete blog
router.delete('/blogs/:blogID', blogController.blogDelete)


//get all comments of specific blog post
router.get('/blogs/:blogID/comments', commentController.commentListGet)

//post comment on specific blog post
router.post('/blogs/:blogID/comments', commentController.commentPost)



module.exports = router;
