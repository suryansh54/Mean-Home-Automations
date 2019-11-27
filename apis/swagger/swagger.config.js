// Extended: https://swagger.io/specification/#infoObject
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Home automation API",
            description: "Home automation Information",
            contact: {
                name: "Suryansh Srivastava"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
};

module.exports = swaggerJsDoc(swaggerOptions);