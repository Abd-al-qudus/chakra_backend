const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { login, logout, register } = require('../controllers/emailAuthController');
const refreshTokenController = require('../controllers/refreshTokenController');

const router = express.Router()

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/logout', logout);
router.get('/auth/refresh', refreshTokenController);
router.get('/', verifyJWT, (req, res) => {
    return res.status(200).json({ message: 'hello world' });
});

module.exports = router;