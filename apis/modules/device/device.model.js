const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const device = new Schema({
  UserID: String,
  DeviceName:  String,
  DeviceGroup: String,
  DeviceType: String,
  DeviceIcon: String,
  DeviceDescription: String,
  DeviceCreator: String,
  DeviceImage: String,
  DeviceRemoteId: String,
  DeviceSetting: String,
  DeviceCurrentStatus: String
});

module.exports = mongoose.model('device', device);