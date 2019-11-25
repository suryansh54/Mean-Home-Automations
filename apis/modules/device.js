const express = require('express');
const router = express.Router();


router.get('/devices', function (req, res) {
    res.json(
        [
            {
                id:1,
                name:"Bedroom Light",
                type: "Switch",
                mode: "Single",
                status: 1
            }, {
                id:2,
                name:"Kitchen Light",
                type: "Switch",
                mode: "Single",
                status: 0
            }, {
                id:3,
                name:"Garden Light",
                type: "Switch",
                mode: "Single",
                status: 1
            } ,
            {
                id:4,
                name:"Bathroom Light",
                type: "Switch",
                mode: "Single",
                status: 0
            } ,
            {
                id:5,
                name:"Fan",
                type: "Switch",
                mode: "Single",
                status: 1
            }
        ]
    );
})

module.exports = router;

