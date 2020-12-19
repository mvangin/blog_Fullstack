let User = require('../models/user');
let bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { body, validationResult } = require('express-validator');




const secret = process.env.SECRET

const CurrentadminPassword = process.env.CURRENTADMINPASSWORD

exports.loginGet = function (req, res) {
    res.send('login page');
}

exports.loginPost = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.json({ error: "Invalid username or password. Please try again." });
            }
            bcrypt.compare(password, user.password)
                .then((isMatch, error) => {
                    if (isMatch) {
                        console.log(`USER ${user}`)

                        const payload = {
                            id: user._id,
                            name: user.username
                        };
                        jwt.sign(payload, secret, { expiresIn: '1d' },
                            (error, token) => {
                                if (error) {
                                    error = "Error signing token";
                                    res.status(500)
                                        .json({
                                            error: error.array(),
                                            raw: error
                                        });
                                }
                                let username = user.username + ""
                                
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`,
                                    id: user._id,
                                    username: username,
                                });

                            });

                    } else {
                        res.json({ error: "Invalid username or password. Please try again." });
                    }
                });
        })

}

exports.loginPostAdmin = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const adminPassword = req.body.adminPassword

    if (adminPassword !== CurrentadminPassword) {
        res.json({
            error: "Admin password incorrect"
        })
    }

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.json({ error: "Invalid username or password. Please try again." });
            }
            bcrypt.compare(password, user.password)
                .then((isMatch, error) => {
                    if (isMatch) {
                        console.log(`USER ${user}`)

                        const payload = {
                            id: user._id,
                            name: user.username
                        };
                        jwt.sign(payload, secret, { expiresIn: '1d' },
                            (error, token) => {
                                if (error) {
                                    error = "Error signing token";
                                    res.status(500)
                                        .json({
                                            error: error.array(),
                                            raw: error
                                        });
                                }
                                let username = user.username + ""
                                
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`,
                                    id: user._id,
                                    username: username,
                                });

                            });

                    } else {
                        res.json({ error: "Invalid username or password. Please try again." });
                    }
                });
        })

}


exports.signupGet = function (req, res) {
    res.send('sign up get');
}

exports.signupPost = [
    body('username').trim().isEmail().withMessage('Valid email address required').escape(),

    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').escape(),

    function (req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ errors: errors.array() });
            return
        }

        /*if (username.length < 5 || password.length < 5) {
            console.log(username.length)
            return res.json({ error: "Username and password must be at least five characters long" })
        }
        */

        const username = req.body.username;
        const password = req.body.password;
        const marketing = req.body.marketing;


        User.findOne({ username })
            .then(user => {
                if (user) {
                    let error = 'Username already in database'
                    return res.json({ errors: error.array() })
                }
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        return next(err);
                    };

                    const user = new User({
                        username: username,
                        password: hashedPassword,
                        marketing: marketing
                    }).save(err => {
                        if (err) {
                            return next(err);
                        } else {
                            return res.json({ success: true });
                        }
                    });
                })
            })
    }
]
