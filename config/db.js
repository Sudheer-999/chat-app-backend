const mongoose = require('mongoose');
const constants = require('./constants')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(constants.MONGODB_CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
