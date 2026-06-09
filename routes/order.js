const express = require('express');
const { createOrder, getOrderById } = require('../controllers/orderControllers');
const router = express.Router();

// @route   POST api/orders
router.route('/orders').post(createOrder);


module.exports = router;
