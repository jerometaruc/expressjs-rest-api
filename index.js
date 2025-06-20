import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/product.model.js';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
    res.send("Hello from node API Server");
});

// Route to create a new product in the database
app.post('/api/products', async (req, res) => {
    try {
        // Create a new product using data from the request body
        const product = await Product.create(req.body);
        // Respond with the created product
        res.status(200).json(product);
    } catch (error) {
        // Handle errors (e.g., validation issues)
        res.status(500).json({message: error.message});
    }
})

// Connect to MongoDB using the URI in .env
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
    // Start server only after DB connection is successful
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});
