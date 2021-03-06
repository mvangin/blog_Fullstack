var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bp = require('body-parser');

var logger = require('morgan');
var indexRouter = require('./routes/index');
let passport = require('passport');
require('./passport-config')(passport);
let cors = require('cors')
require('dotenv').config();

let mongoose = require("mongoose")

let mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var app = express();

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});



app.use(cors())
app.use(bp.json());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static(path.join(__dirname, '../build')))

app.use(passport.initialize());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', function(req,res) {
 res.json({success:"yes"})
})

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
