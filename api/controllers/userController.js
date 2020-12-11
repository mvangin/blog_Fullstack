let User = require('../models/user');
let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const secret = process.env.SECRET

const CurrentadminPassword = process.env.CURRENTADMINPASSWORD

exports.loginGet = function (req, res) {
    res.send('login page');
}

exports.loginPost = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username)
    const adminPassword = req.body.adminPassword
    
    if (adminPassword !== CurrentadminPassword)
    { res.json({
        error: "admin password incorrect"
    })}
    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.json({error: "Invalid email or password. Please try again."});
            }
            bcrypt.compare(password, user.password)
                .then((isMatch, error) => {
                    if (isMatch) {
                        console.log(`USER ${user}`)

                        const payload = {
                            id: user._id,
                            name: user.username
                        };
                        jwt.sign(payload, secret, {expiresIn: '1d'},
                            (error, token) => {
                                if (error) res.status(500)
                                    .json({
                                        error: "Error signing token",
                                        raw: error
                                    });
                                let username = user.username + ""
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`,
                                    id: user._id,
                                    username: username,
                                });

                            });

                    } else {
                        res.json({error: "Invalid email or password. Please try again."});
                    }
                });
        })
    
}

exports.signupGet = function (req, res) {
    res.send('sign up get');
}

exports.signupPost = function (req, res, next) {
    let username = req.body.username;
    User.findOne({ username })
        .then(user => {
            if (user) {
                let error = 'Username already in database'
                return res.status(400).json(error)
            }
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
                if (err) {
                    return next(err);
                };
                const user = new User({
                    username: req.body.username,
                    password: hashedPassword
                }).save(err => {
                    if (err) {
                        return next(err);
                    };
                    console.log("success")
                    res.redirect("/");
                });
            })
        })
}
