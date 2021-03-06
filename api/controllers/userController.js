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
                return res.status(400).json({ error: "Invalid username or password. Please try again." });
            } else {
                bcrypt.compare(password, user.password)
                    .then((isMatch) => {
                        if (isMatch) {
                            console.log(`USER ${user}`)
                            const payload = {
                                id: user._id,
                                name: user.username,
                                displayName: user.displayName,
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


                                    res.status(200).json({
                                        success: true,
                                        token: `Bearer ${token}`,
                                        id: user._id,

                                    });

                                });

                        } else {
                            res.status(400).json({ error: "Invalid username or password. Please try again." });
                        }
                    });
            }
        })

}

exports.loginPostAdmin = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username })
        .then((user) => {
            if (!user) {
                return res.status(400).send({ error: "Invalid username or password. Please try again." });
            }

            if (!user.admin) {
                return res.status(400).json({ error: "Login requires admin authorization" });
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
                                            error: error,
                                            raw: error
                                        });
                                }
                                let username = user.username + ""

                                res.status(200).json({
                                    success: true,
                                    token: `Bearer ${token}`,
                                    id: user._id,
                                    username: username,
                                });

                            });

                    } else {
                        res.status(400).json({ error: "Invalid username or password. Please try again." });
                    }
                });
        })

}


exports.signupGet = function (req, res) {
    res.send('sign up get');
}

exports.signupPost = [

    body('displayName').trim().isLength({ min: 5 }).withMessage('Display must be at least 5 characters long').escape(),

    body('username').trim().isEmail().withMessage('Valid email address required').escape(),

    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').escape(),


    function (req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        /*if (username.length < 5 || password.length < 5) {
            console.log(username.length)
            return res.json({ error: "Username and password must be at least five characters long" })
        }
        */

        const displayName = req.body.displayName;
        const username = req.body.username;
        const password = req.body.password;
        const marketing = req.body.marketing;



        User.findOne({ username })
            .then(user => {
                if (user) {
                    let error = 'Username already in use'
                    res.status(400).json({ error: error });
                } else {
                    User.findOne({ displayName })
                        .then(disp => {
                            if (disp) {
                                let error = 'display name already in use'
                                return res.status(400).json({ error: error })
                            } else {
                                bcrypt.hash(password, 10, (err, hashedPassword) => {
                                    if (err) {
                                        return res.status(500).json({ error: err })
                                    };
                                    console.log(displayName)
                                    const user = new User({
                                        username: username,
                                        password: hashedPassword,
                                        marketing: marketing,
                                        displayName: displayName
                                    }).save(err => {
                                        if (err) {
                                            return next(err);
                                        } else {

                                            return res.status(200).json({ success: true });
                                        }
                                    });
                                })
                            }
                        })
                }
            })
    }
]


exports.signupPostAdmin = [


    body('username').trim().isLength({ min: 5 }).withMessage('Username must be at least 5 characters long').escape(),

    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long').escape(),


    function (req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            
        }

        /*if (username.length < 5 || password.length < 5) {
            console.log(username.length)
            return res.json({ error: "Username and password must be at least five characters long" })
        }
        */

        const username = req.body.username;
        const password = req.body.password;

        const adminPassword = req.body.adminPassword

        if (adminPassword !== CurrentadminPassword) {
             res.status(400).json({
                error: "Admin password incorrect"
            })
        } else {
            User.findOne({ username })
                .then(user => {
                    if (user) {
                        let error = 'Username already in use'
                         res.status(400).json({ error: error });
                    } else {
                        bcrypt.hash(password, 10, (err, hashedPassword) => {
                            if (err) {
                                 res.status(500).json({ success: false });
                            };
                            const user = new User({
                                username: username,
                                password: hashedPassword,
                                admin: true
                            }).save(err => {
                                if (err) {
                                     res.status(500).json({ success: false });
                                } else {
                                    return res.status(200).json({ success: true });
                                }
                            });
                        })
                    }
                })
        }
    }
]