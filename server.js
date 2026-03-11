/** * PROJECT: REST API Checkpoint
 * FILE: Server.js
 * DESCRIPTION: Express server setup & MongoDB connection
 */

// 1. Configure Dotenv (Crucial: path must match step 6)
require('dotenv').config({ path: './config/.env' });

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to read JSON from Postman
app.use(express.json());

// 2. The Connection Logic
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("-----------------------------------------");
        console.log("🍃 MONGODB CONNECTED SUCCESSFULLY!");
        console.log("✅ Database: Atlas Cluster0");
        console.log("-----------------------------------------");
    } catch (err) {
        console.error("❌ MONGODB CONNECTION ERROR:");
        console.error(err.message);
        process.exit(1); // Stop the server if DB fails
    }
};

// Run the connection function
connectDB();

// 3. Simple Test Route
app.get('/', (req, res) => {
    res.send("API is running and connecting to Atlas...");
});

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server launched on http://localhost:${PORT}`);
});