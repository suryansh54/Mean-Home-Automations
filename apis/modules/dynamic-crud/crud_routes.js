// express router 
const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const connection = require('./mongoose_connection');
const crudModel = mongoose.model('Test');


router.get('/crud', function (req, res) {
    crudModel.find((err, docs)=>{
        if(!err) {
            res.json({"dummy":"data"})
        } else {

        }
    })
});

router.post('/crud', function (req, res) {
    res.json('token')
});

router.delete('/crud', function (req, res) {
    res.json('token')
});

router.patch('/crud', function (req, res) {
    res.json('token')
});

module.exports = router;