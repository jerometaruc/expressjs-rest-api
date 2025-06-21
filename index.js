import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoute from './routes/product.route.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// // Register product-related routes under /api/products
app.use("/api/products", productRoute);

// Root route for testing
app.get('/', (req, res) => {
    res.send("Hello from node API Server");
});

// Connect to MongoDB using the URI in .env
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
