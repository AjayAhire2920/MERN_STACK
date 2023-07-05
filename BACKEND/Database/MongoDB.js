const mongoose = require('mongoose');


const dbConnection = async () => {
    mongoose.connect('mongodb://localhost:27017/e-commerce');
    console.log('Database Connected!');
}


module.exports = dbConnection;