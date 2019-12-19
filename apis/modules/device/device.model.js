const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSetting = new Schema({
    testSetting: String
});

const device = new Schema({
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