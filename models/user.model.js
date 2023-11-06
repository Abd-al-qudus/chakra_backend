const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const user = mongoose.model(
    'User',
    mongoose.Schema({
        fullName: {
            type: String, required: true, lowercase: true
        },
        email: {
            type: String, required: true, unique: true, lowercase: true
        },
        password: {
            type: String, required: true, lowercase: true
        },
        lastLogin: {
            type: String, required: true, lowercase: true
        },
        earning: {
            type: String, required: true, lowercase: true
        },
        joined: {
            type: Date, default: Date.now
        }
    })
);

user.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}

module.exports = user;
