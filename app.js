/******************************
 ********** Requires **********
 ******************************/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // Allows to make request to API from different domain name
const passport = require('passport');
const mongoose = require('mongoose');
// Routes
const users = require('./routes/users');
// Initialize app with express
const app = express();

/****************************************
 ********** MongoDB Connection **********
 ****************************************/
const config = require('./config/db');
// Connect to database
mongoose.connect(config.database);
// Verify database connection
mongoose.connection.on('connected', () => {
    console.log(`connected to the ${config.database} database`);
});
// Check for database connection error
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

/***************************
 ******* Middleware ********
 ***************************/
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users); // user routes
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Index route
app.get('/', (req, res) => res.send('Invalid Endpoint'));

// Redirect invalid routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Listen for server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));