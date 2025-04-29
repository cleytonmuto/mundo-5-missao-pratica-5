'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const contractRoutes = require('./routes/contracts');

// configure middleware
app.set('port', process.env.PORT || port); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contracts', contractRoutes);

// set the app to listen on the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
