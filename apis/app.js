const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

// For cors 
app.use(cors())

// Routing imports
var authModule = require('./modules/auth');
var osModule = require('./modules/os');
var deviceModule = require('./modules/device');

app.use('/api', authModule);
app.use('/api', osModule);
app.use('/api', deviceModule);

app.listen(port,() => console.log(`Your server is runs into the port ${port}`)); // Creates a server