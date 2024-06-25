const express = require('express');
require('../db'); // Ensure this path is correct based on your project structure
const Product = require('../Model/productsm'); // Ensure this path is correct based on your project structure

const product = express.Router();

// Get all products
product.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;

    try {
        const totalProducts = await Product.countDocuments();
        const products = await Product.find().skip(startIndex).limit(limit);
        res.send({
            page,
            limit,
            total: totalProducts,
            products
        });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch products' });
    }
});
// Create a new product
product.post('/', async (req, res) => {
    try {
        let product = new Product(req.body);
        let result = await product.save();
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: 'Failed to create product' });
    }
});

// Update product (uncomment and adjust as needed)
// product.put('/:_id', async (req, res) => {
//     try {
//         let result = await Product.updateOne({ _id: req.params._id }, { $set: req.body });
//         res.send(result);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to update product' });
//     }
// });

// Delete product (uncomment and adjust as needed)
// product.delete('/:_id', async (req, res) => {
//     try {
//         let result = await Product.deleteOne({ _id: req.params._id });
//         if (result.deletedCount > 0) {
//             res.send(result);
//         } else {
//             res.send('There is no such data');
//         }
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to delete product' });
//     }
// });

module.exports = product;
