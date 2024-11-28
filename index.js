const express    = require('express')
const bodyParser = require('body-parser')
const dotenv     = require('dotenv')
const connectDB  = require('./config/db')

const app  = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = require('./app/routes/userRoutes')


app.use('/users', users);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

connectDB();