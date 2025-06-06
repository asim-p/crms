const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Adjust path if needed
const bcrypt = require('bcryptjs');

// GET login page
router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login' });
});

// POST login form
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const foundUser = await User.findOne({ username });

        if (!foundUser) {
            return res.redirect('/login');
        }

        const match = await foundUser.comparePassword(password);

        if (match) {
            req.session.user = { username: foundUser.username, _id: foundUser._id };
            return res.redirect('/dashboard');
        } else {
            return res.redirect('/login');
        }
    } catch (err) {
        console.error(err);
        return res.redirect('/login');
    }
});

// GET signup page
router.get('/signup', (req, res) => {
    res.render('auth/signup', { title: 'Sign Up' });
});

// POST signup form
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.redirect('/signup');
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.redirect('/dashboard');
        }
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});

module.exports = router;
