import express from 'express';
import {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

// Get all products
// Endpoint: GET /api/products
router.get('/', getProducts);

// Get a single product by ID
// Endpoint: GET /api/products/:id
router.get('/:id', getProduct);

// Create a new product
// Endpoint: POST /api/products
router.post('/', postProduct);

// Update a product
// Endpoint: PUT /api/products/:id
router.put('/:id', putProduct);

// Delete a product
// Endpoint: Delete /api/products/:id
router.delete('/:id', deleteProduct);

export default router;
