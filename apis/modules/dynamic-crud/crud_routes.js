// https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34
// express router 
const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const connection = require('./mongoose_connection');
const crudModel = mongoose.model('test1');
var ObjectID = require('mongodb').ObjectID;


router.get('/crud', (req, res) => {
    crudModel.find({})
        .then(data => res.status(200).json({ "data": data }))
        .catch(err => console.log(err))
});

router.get('/crud/:id', (req, res) => {
    const id = new ObjectID(req.params.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        crudModel.findOne({ _id: id })
            .then(data => res.status(200).json({ "data": data }))
            .catch(err => console.log(err))
    }
});

router.post('/crud', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    crudModel.collection.insertOne({ name: name, age: age })
        .then(data => res.status(200).json({ "data": "User successfully created" }))
        .catch(err => console.log(err))
});

// https://stackoverflow.com/questions/39102845/my-document-is-not-getting-deleted-in-mongodb-in-nodejs
router.delete('/crud', function (req, res) {
    const id = new ObjectID(req.body.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        crudModel.collection.deleteOne({ _id: id })
            .then(data => res.status(200).json({ "data": "Data deleted successfully" }))
            .catch(err => console.log(err))
    }
});

router.patch('/crud', function (req, res) {
    let name = req.body.name
    let age = req.body.age
    const id = new ObjectID(req.body.id);
    if (mongoose.Types.ObjectId.isValid(id)) {
        crudModel.findOneAndUpdate({ _id: id }, { $set: { name: name, age: age } }, { new: true }).then((docs) => {
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