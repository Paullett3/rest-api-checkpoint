// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
// Tell dotenv to look inside the 'config' folder
require('dotenv').config({ path: './config/.env' });

// Use the key name you defined in the .env file
const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.log("❌ Connection error:", err));
// Use the key name you defined in the .env file

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.log("❌ Connection error:", err));

// Configuring environment variables from the specific path
require('dotenv').config({ path: './config/.env' });

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// 1. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB locally/Atlas'))
.catch(err => console.error('❌ Connection error:', err));

// 2. ROUTES

// GET : RETURN ALL USERS
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Mongoose find method
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST : ADD A NEW USER TO THE DATABASE
app.post('/users', async (req, res) => {
    const newUser = new User(req.body); // Create instance from request body
    try {
        const savedUser = await newUser.save(); // Mongoose save method
        res.status(201).json(savedUser); // 201 Created
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT : EDIT A USER BY ID
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Option to return the updated document
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE : REMOVE A USER BY ID
app.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id); // Mongoose remove method
        res.status(200).json({ message: "User successfully deleted" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));