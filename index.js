import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from node API Server");
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});
