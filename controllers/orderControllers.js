const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

// Create new order => /api/v1/orders
exports.createOrder = async (req, res, next) => {
    try {
        const cartItems = req.body;
        
        // Calculate total amount
        const amount = Number(cartItems.reduce((total, item) => total + item.product.price * item.qty, 0)).toFixed(2);
        const status = 'pending';
        
        // 1. Create the order
        const order = await orderModel.create({ cartItems, amount, status });

        // 2. Update product stock safely using for...of
        for (const item of cartItems) {
            // Extract the ID safely depending on your frontend structure
            const productName = item.product.name || item.product; 
            
            console.log("Searching for Product Name:", productName);
            
            const product = await productModel.findOne({ name: productName });
            
            if (!product) {
                console.error(`Product with Name ${productName} not found in database.`);
                continue; // Skip this item so the server doesn't crash, or throw an error
            }

            // Update and save stock
            product.stock = product.stock - item.qty;
            await product.save();
            console.log(`Updated stock for ${product.name}. New stock: ${product.stock}`);
        }

        // 3. Send response ONLY after all stock updates are done
        res.json({ success: true, order, message: 'Order created successfully' });

    } catch (err) {
        console.error("Order Creation Error:", err);
        res.status(500).json({ success: false, message: 'Server Error', error: err.message });
    }
}