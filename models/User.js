/** * PROJECT: REST API Checkpoint
 * FILE: User.js
 * DESCRIPTION: Mongoose Schema for our Users
 */

const mongoose = require('mongoose');

// Define the blueprint for a User
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true, // No duplicate emails!
        lowercase: true
    },
    age: {
        type: Number,
        default: 18
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model so Server.js can use it
module.exports = mongoose.model('User', userSchema);