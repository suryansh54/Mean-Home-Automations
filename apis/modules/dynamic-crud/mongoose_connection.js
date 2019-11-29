// Mongo DB connection via mongoose 
const mongoose = require('mongoose');
const mongoConnectionString = 'mongodb+srv://suryansh54:Education54@cluster0-lo8aj.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection to database established`)
}).catch(err => {
    console.log(`db error ${err.message}`);
});

var Test = require('./crud-model/test.model');