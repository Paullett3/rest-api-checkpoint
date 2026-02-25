const mongoose = require('mongoose');

// Defining the User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number
});

// Exporting the model to be used in server.js
module.exports = mongoose.model('User', userSchema);