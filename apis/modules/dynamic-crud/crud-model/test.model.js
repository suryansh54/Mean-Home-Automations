var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testCrudApis = new Schema({
  name:  String,
  age: String
});

mongoose.model('test1', testCrudApis);