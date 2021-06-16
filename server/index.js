const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path: 'server/.env' });
const mongoose = require('mongoose');
const workersRouter = require('./routes/workers');

const server = express();
const { SERVER_PORT, SERVER_URL } = process.env;

// middleware
server.use(cors());
server.use(morgan('tiny'));
server.use(express.json());

// Additional routes
server.use('/workers', workersRouter)

// Main route
server.get('/', (req, res) => {
    res.send('Serveris veikia')
});

// mongoDB connection
mongoose.connect(SERVER_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connected', function () {
    console.log('Connected to Database successfully!');
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on http://localhost:${SERVER_PORT}`);
    });
});

db.on('error', (error) => console.error('ERROR: FAILED TO CONNECT TO DB:\n ' + error));