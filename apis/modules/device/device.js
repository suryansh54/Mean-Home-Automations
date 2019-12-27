const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const deviceModel = require('./device.model');
const ObjectID = require('mongodb').ObjectID;

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    console.log("Token from Angular UI ", token)
    if(token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = token;
    next()
}

router.get('/device/all', verifyToken, (req, res) => {
    deviceModel.find({})
        .then(data => res.status(200).json({ "data": data }))
        .catch(err => console.log(err))
});

router.get('/device/:id', (req, res) => {
    const id = new ObjectID(req.params.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        deviceModel.findOne({ _id: id })
            .then(data => res.status(200).json({ "data": data }))
            .catch(err => console.log(err))
    }
});

router.post('/device', (req, res) => {
    let DeviceName = req.body.DeviceName
    let DeviceGroup = req.body.DeviceGroup
    let DeviceType = req.body.DeviceType
    let DeviceIcon = req.body.DeviceIcon
    let DeviceDescription = req.body.DeviceDescription
    let DeviceCreator = req.body.DeviceCreator
    let DeviceImage = req.body.DeviceImage
    let DeviceRemoteId = req.body.DeviceRemoteId
    let DeviceSetting = req.body.DeviceSetting
    let DeviceCurrentStatus = req.body.DeviceCurrentStatus
    deviceModel.collection.insertOne({ 
        DeviceName: DeviceName,
        DeviceGroup: DeviceGroup,
        DeviceType: DeviceType,
        DeviceIcon: DeviceIcon,
        DeviceDescription: DeviceDescription,
        DeviceCreator: DeviceCreator,
        DeviceImage: DeviceImage,
        DeviceRemoteId: DeviceRemoteId,
        DeviceSetting: DeviceSetting,
        DeviceCurrentStatus: DeviceCurrentStatus
    }).then(data => res.status(200).json({ "data": "Device created successfully" })).catch(err => console.log(err))
});

// https://stackoverflow.com/questions/39102845/my-document-is-not-getting-deleted-in-mongodb-in-nodejs
router.delete('/device/:id', function (req, res) {
    const id = new ObjectID(req.params.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        deviceModel.collection.deleteOne({ _id: id })
            .then(data => res.status(200).json({ "data": "Device deleted successfully" }))
            .catch(err => console.log(err))
    }
});

router.patch('/device', function (req, res) {
    const id = new ObjectID(req.body.id);
    let DeviceName = req.body.DeviceName
    let DeviceGroup = req.body.DeviceGroup
    let DeviceType = req.body.DeviceType
    let DeviceIcon = req.body.DeviceIcon
    let DeviceDescription = req.body.DeviceDescription
    let DeviceCreator = req.body.DeviceCreator
    let DeviceImage = req.body.DeviceImage
    let DeviceRemoteId = req.body.DeviceRemoteId
    let DeviceSetting = req.body.DeviceSetting
    let DeviceCurrentStatus = req.body.DeviceCurrentStatus
    if (mongoose.Types.ObjectId.isValid(id)) {
        deviceModel.findOneAndUpdate({ _id: id }, { $set: 
            { 
                DeviceName: DeviceName,
                DeviceGroup: DeviceGroup,
                DeviceType: DeviceType,
                DeviceIcon: DeviceIcon,
                DeviceDescription: DeviceDescription,
                DeviceCreator: DeviceCreator,
                DeviceImage: DeviceImage,
                DeviceRemoteId: DeviceRemoteId,
                DeviceSetting: DeviceSetting,
                DeviceCurrentStatus: DeviceCurrentStatus
            }
        }, { new: true }).then((docs) => {
            if (docs) {
                res.status(200).json({ "data": docs })
            } else {
                res.status(200).json({ success: false, data: "no such data exist" });
            }
        }).catch((err) => {
            console.log(err);
        })
    } else {
        res.status(200).json({ success: "false", data: "provide correct key" });
    }
});

module.exports = router;

