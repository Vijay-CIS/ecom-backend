const mongoose = require('mongoose');

const connectDatabase =  () => {
       mongoose.connect(process.env.DB_URI).then((conn) => {

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  })
};
module.exports = connectDatabase;