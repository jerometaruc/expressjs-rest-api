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

// Get all products
// Endpoint: GET /api/products
// Fetches all product documents from the database
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new product
// Endpoint: POST /api/products
// Inserts a new product into the database
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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
