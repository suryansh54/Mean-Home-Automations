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
const authModule = require('./modules/auth');
const osModule = require('./modules/os');
const deviceModule = require('./modules/device');
const wifi = require('./modules/wifi_scan');
const dynamicCrud = require('./modules/dynamic-crud/crud_routes');

app.use('/v1/api', authModule);
app.use('/v1/api', osModule);
app.use('/v1/api', deviceModule);
app.use('/v1/api', wifi);
app.use('/v1/api', dynamicCrud);


app.listen(port,() => console.log(`Your server is runs into the port ${port}`)); // Creates a server



  // Routes
  /**
   * @swagger
   * /v1/api/os:
   *  get:
   *    description: Use to request all customers
   *    responses:
   *      '200':
   *        description: A successful response
   */