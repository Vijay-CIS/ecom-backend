const express = require('express');
const app = express();

const connectDatabase = require('./config/connectDatabase');


require('dotenv').config({ path: './config/config.env' });

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
connectDatabase();
app.use('/api/v1', productRoutes);
app.use('/api/v1', orderRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});