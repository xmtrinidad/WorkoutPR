const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create User model that uses User Schema and export
const User = module.exports = mongoose.model('User', UserSchema);

/**** User Functions ****/
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
    const query = {username: username};
    User.findOne(query, callback)
};

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = (enteredPassword, hash, callback) => {
    bcrypt.compare(enteredPassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};