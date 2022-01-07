const mongoose = require('mongoose');

// Create your User Model
//must include the googleId like in the passport example app

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
});

module.exports = mongoose.model('User', userSchema);