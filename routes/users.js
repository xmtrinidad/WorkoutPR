const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
// User Model
const User = require('../models/user');
// Database Config
const config = require('../config/db');

// Middleware router needed for main app.js
const router = express.Router();

router.post('/register', (req, res) => {
    // Create new User
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err) => {
        if (err) {
            res.json({success: false, msg: 'failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });

});

router.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        // If there is no User with that username
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                // Create JWT
                const token = jwt.sign(user.toObject(), config.secret, {
                    expiresIn: '604800'
                });
                // JSON Response
                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({user: req.user});
});

// Export to app.js
module.exports = router;