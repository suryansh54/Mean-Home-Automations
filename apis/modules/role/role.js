const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const roleModel = require('./role.model');
const ObjectID = require('mongodb').ObjectID;
const verifyToken = require('../verifyToken');

/* router.get('/role/all', verifyToken, (req, res) => {
    roleModel.find({})
        .then(data => res.status(200).json({ "data": data }))
        .catch(err => console.log(err))
}); */

router.get('/role/all', verifyToken, (req, res) => {
    const UserID = req.userId;
    if (UserID) {
        roleModel.find({ UserID: UserID })
            .then(data => res.status(200).json({ "data": data }))
            .catch(err => console.log(err))
    }
});

router.get('/role/:id', verifyToken, (req, res) => {
    const id = new ObjectID(req.params.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        roleModel.findOne({ _id: id })
            .then(data => res.status(200).json({ "data": data }))
            .catch(err => console.log(err))
    }
});

router.post('/role', verifyToken, (req, res) => {
    let UserID = req.userId;
    let RoleName = req.body.RoleName
    let RoleGroup = req.body.RoleGroup
    let RoleType = req.body.RoleType
    let RoleIcon = req.body.RoleIcon
    let RoleDescription = req.body.RoleDescription
    let RoleCreator = req.body.RoleCreator
    let RoleImage = req.body.RoleImage
    let RoleRemoteId = req.body.RoleRemoteId
    let RoleSetting = req.body.RoleSetting
    let RoleCurrentStatus = req.body.RoleCurrentStatus
    roleModel.collection.insertOne({
        UserID: UserID,
        RoleName: RoleName,
        RoleGroup: RoleGroup,
        RoleType: RoleType,
        RoleIcon: RoleIcon,
        RoleDescription: RoleDescription,
        RoleCreator: RoleCreator,
        RoleImage: RoleImage,
        RoleRemoteId: RoleRemoteId,
        RoleSetting: RoleSetting,
        RoleCurrentStatus: RoleCurrentStatus
    }).then(data => res.status(200).json({ "data": "Role created successfully" })).catch(err => console.log(err))
});

router.delete('/role/:id', verifyToken, function (req, res) {
    const id = new ObjectID(req.params.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        roleModel.collection.deleteOne({ _id: id })
            .then(data => res.status(200).json({ "data": "Role deleted successfully" }))
            .catch(err => console.log(err))
    }
});

router.patch('/role', verifyToken, function (req, res) {
    const id = new ObjectID(req.body.id);
    let RoleName = req.body.RoleName
    let RoleGroup = req.body.RoleGroup
    let RoleType = req.body.RoleType
    let RoleIcon = req.body.RoleIcon
    let RoleDescription = req.body.RoleDescription
    let RoleCreator = req.body.RoleCreator
    let RoleImage = req.body.RoleImage
    let RoleRemoteId = req.body.RoleRemoteId
    let RoleSetting = req.body.RoleSetting
    let RoleCurrentStatus = req.body.RoleCurrentStatus
    if (mongoose.Types.ObjectId.isValid(id)) {
        roleModel.findOneAndUpdate({ _id: id }, {
            $set:
            {
                RoleName: RoleName,
                RoleGroup: RoleGroup,
                RoleType: RoleType,
                RoleIcon: RoleIcon,
                RoleDescription: RoleDescription,
                RoleCreator: RoleCreator,
                RoleImage: RoleImage,
                RoleRemoteId: RoleRemoteId,
                RoleSetting: RoleSetting,
                RoleCurrentStatus: RoleCurrentStatus
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