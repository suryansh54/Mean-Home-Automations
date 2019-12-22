const express = require('express');
const app = express();
const port = 3200;
const cors = require('cors');
const connection = require('./modules/connection');
const fileUpload = require('./modules/file_upload');

// Swagger Setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swagger.config');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// For cors 
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Body Parser
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Routing imports
const authModule = require('./modules/auth');
const osModule = require('./modules/os');
const deviceModule = require('./modules/device/device');
const wifi = require('./modules/wifi_scan');
const dynamicCrud = require('./modules/dynamic-crud/crud_routes');
const device = require('./modules/device/device');

app.use('/v1/api', authModule);
app.use('/v1/api', osModule);
app.use('/v1/api', deviceModule);
app.use('/v1/api', wifi);
app.use('/v1/api', dynamicCrud);
app.use('/v1/api', device);
app.use('/v1/api', fileUpload);


app.listen(port, () => console.log(`Your server is runs into the port ${port}`)); // Creates a server




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

/**
* @swagger
* /v1/api/crud:
*  get:
*    description: Use to request all users
*    responses:
*      '200':
*        description: A successful response
*/

/**
 * @swagger
 * /v1/api/crud/<userId>:
 *  get:
 *    description: Use to request user by id
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
* @swagger
* /v1/api/crud:
*  post:
*    summary: Creates a new user.
*    description: Creates a new user.
*    parameters:
*     - in: body
*       name:
*    responses:
*      '200':
*        description: A successful response
*/ 