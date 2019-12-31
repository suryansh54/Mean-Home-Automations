const Device = require('./modules/device/device.model');

module.exports  = {
  Query: {
    hello: () => "hi",
    devices: () => Device.find()
  },
  
  Mutation: {
    createDevice: async (_, { UserID, DeviceName }) => {
      const device = new Device({UserID: UserID, DeviceName: DeviceName});
      await device.save();
      console.log("Device created successfully");
      return device;
    }
  }
};