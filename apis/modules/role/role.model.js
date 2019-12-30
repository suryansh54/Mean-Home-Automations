const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSetting = new Schema({
    testSetting: String
});

const role = new Schema({
  RoleName:  String,
  RoleGroup: String,
  RoleType: String,
  RoleIcon: String,
  RoleDescription: String,
  RoleCreator: String,
  RoleImage: String,
  RoleRemoteId: String,
  RoleSetting: String,
  RoleCurrentStatus: String
});

module.exports = mongoose.model('role', role);