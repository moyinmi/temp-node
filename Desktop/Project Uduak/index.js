const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoute = require('./routes/auth');

// Connect to MongoDB
require('./db').connectToMongoDB() 
require('dotenv').config()

// Signup and login authentication middleware
require("./authentication/auth") 


const PORT = 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
// middleware
app.use(express.json());

app.use('/auth', authRoute);

// Handle errors.
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error: err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})