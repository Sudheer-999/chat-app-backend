require('dotenv/config');


let constants = {
    MONGODB_CONNECTION_STRING: process.env.MONGO_URI,
}
module.exports = Object.freeze(constants);