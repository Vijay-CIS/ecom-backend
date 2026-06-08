exports.createOrder = (req, res, next) => {
    res.json({ success: true, message: 'Order created successfully' });
}

exports.getOrderById = (req, res, next) => {
    res.json({ success: true, message: 'Get order by ID' });
}