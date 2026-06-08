const express = require('express');
const { getProducts, getProductById } = require('../controllers/productControllers');
const router = express.Router();

// @route   GET api/products
router.route('/products').get(getProducts);
router.route('/product/:id').get(getProductById);

module.exports = router;

