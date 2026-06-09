const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
    price: {
        type: String,
      
    },
    description: {
        type: String,
        
    },
    rating: {
        type: String,
        default: 0 
    },
    images: [
        {
            Image: String,
         
        }
    ],
    category: {
        type: String,
     
        },
    stock: {
        type: String,
        required: [true, 'Please enter product stock'],
      
    },
    numOfReviews: {     
        type: String,
    
    },
    createdAt: {
        type: Date,
      
    }               
    
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;