const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

// Create new order => /api/v1/orders
exports.createOrder = async (req, res, next) => {
    try {
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((total, item) => total + item.product.price * item.qty, 0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({ cartItems, amount, status });

    //update stock of products
    cartItems.forEach(async (item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock -= item.qty;
        await product.save();
    });
        res.json({ success: true, order, message: 'Order created successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}
