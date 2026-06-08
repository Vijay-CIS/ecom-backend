exports.getProducts = (req, res, next) => {
    res.json({ success: true, message: 'Get all products' });
}

exports.getProductById = (req, res, next) => {
    res.json({ success: true, message: 'Get product by ID' });
}