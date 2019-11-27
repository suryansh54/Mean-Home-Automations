const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Swagger Setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swagger.config');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  

// For cors 
app.use(cors());

// Routing imports
var authModule = require('./modules/auth');
var osModule = require('./modules/os');
var deviceModule = require('./modules/device');

app.use('/api', authModule);
app.use('/api', osModule);
app.use('/api', deviceModule);

app.listen(port,() => console.log(`Your server is runs into the port ${port}`)); // Creates a server



  // Routes
  /**
   * @swagger
   * /api/os:
   *  get:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */