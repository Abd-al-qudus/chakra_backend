const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = mongoose.model(
    'User',
    mongoose.Schema({
        username: {
            type: String, required: true, lowercase: true
        },
        email: {
            type: String, required: true, unique: true, lowercase: true
        },
        password: {
            type: String, required: true
        },
        lastLogin: {
            type: Date, required: true, default: Date.now
        },
        earning: {
            type: Number, default: 0
        },
        joined: {
            type: Date, default: Date.now
        },
        refreshToken: {
            type: String, required: false
        },
        walletAddress: {
            type: String
        }
    })
);

module.exports = user;
