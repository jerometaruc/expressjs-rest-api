# CRUD RESTful API

A CRUD RESTful API built with **Node.js**, **Express.js**, and **MongoDB**

---

## Features

- Simple CRUD operations for products
- Modular architecture (routes, controllers, models)
- MongoDB connection via **Mongoose**
- Local testing via **Thunder Client**

---

## Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/`                  | Test root route          |
| GET    | `/api/products`      | Get all products         |
| GET    | `/api/products/:id`  | Get a product by ID      |
| POST   | `/api/products`      | Create a new product     |
| PUT    | `/api/products/:id`  | Update a product         |
| DELETE | `/api/products/:id`  | Delete a product         |

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Thunder Client

---

## Setup

```bash
# Install dependencies
npm install

# Create a .env file
touch .env

# Add your environment variable to .env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>

# Start development server
npm run dev

