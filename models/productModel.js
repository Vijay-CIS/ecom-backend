const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    rating: {
        type: Number,
        default: 0 
    },
    images: [
        {
            type: String,
            required: [true, 'Please enter image URL']
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter product category']
        },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Stock cannot exceed 5 characters']
    },
    numOfReviews: {     
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }               
    
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;