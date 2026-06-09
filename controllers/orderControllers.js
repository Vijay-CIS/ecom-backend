const orderModel = require('../models/orderModel');

// Create new order => /api/v1/orders
exports.createOrder = async (req, res, next) => {
    try {
        console.log(req.body, 'order data');
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((total, item) => total + item.product.price * item.qty, 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({ cartItems, amount, status });
    console.log(amount, 'total amount');
        res.json({ success: true, order, message: 'Order created successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}

exports.getOrderById = (req, res, next) => {
    res.json({ success: true, message: 'Get order by ID' });
}