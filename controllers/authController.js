const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationRequest } = require('express-validator');


const login = async (req, res) => {
    const errors = validationRequest(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'missing username/password' });
    }
    if (typeof email !== "string" || typeof password !== "string") {
        return res.status(400).json({ error: 'invalid username/password' });
    }
    const user = User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'user does not exist' });
    }
    if (!user.validatePassword) {
        return res.status(401).json({ error: 'invalid password' });
    }
    accessToken = jwt.sign({ email: user.email, _id: user._id},
        process.env.ACCESS_TOKEN,
        { expiresIn: "300s" });
    accessToken = jwt.sign({ email: user.email, _id: user._id},
        process.env.REFRESH_TOKEN,
        { expiresIn: "1d" });
    res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 3600 * 1000 });
    return res.status(204).json({ accessToken });
}

const logout = async (req, res) => {

}