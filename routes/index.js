const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { login, logout, register } = require('../controllers/emailAuthController');
const refreshTokenController = require('../controllers/refreshTokenController');
const passport = require('../config/googleAuthConfig');


const router = express.Router()

//jwt manual routes

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/logout', logout);
router.get('/auth/refresh', refreshTokenController);

//google auth routes
router.get('/auth/google', passport.authenticate('google', {
    accessType: 'offline',
    approvalPrompt: 'force',
}), (req, res) => {
    console.log('auth--', req.user);
    res.sendStatus(200);
});
router.get('/auth/google/redirect', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failure'
}), (req, res) => {
    console.log('redirect--', req.user);
    res.sendStatus(200);
});
router.get('/auth/google/failure', (req, res) => {
    return res.status(500).json({ message: 'something went wrong' });
});

//user routes
router.get('/', verifyJWT, (req, res) => {
    console.log(req.user);
    return res.status(200).json({ token: req.token });
});


module.exports = router;