const express = require('express');
const { check } = require('express-validator');

const router = express.Router()

router.post('/user/login');
router.post('/user/register')
router.get('/user/logout');
router.get('/user/:id');

module.exports = router;