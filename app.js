const express = require('express');
const cors = require('cors');
const app = express();

const connectDatabase = require('./config/connectDatabase');


require('dotenv').config({ path: './config/config.env' });
app.use(cors({origin: 'http://localhost:4200'}));

const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
connectDatabase();

app.use(express.json());
app.use('/api/v1', productRoutes);
app.use('/api/v1', orderRoutes);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});