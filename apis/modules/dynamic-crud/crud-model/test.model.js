var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testCrudApis = new Schema({
  test:  String,
  test2: String
});

mongoose.model('Test', testCrudApis);