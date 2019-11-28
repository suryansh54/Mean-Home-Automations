const wifi = require("node-wifi");
const express = require('express')
const router = express.Router()

wifi.init({
    iface: null
});

router.get('/wifi-current', (req, res) => {
    wifi.getCurrentConnections().then(networks => {
        res.json(
            {
                networks: networks,
            }
        );
    }).catch(error => console.log(error));
})

router.get('/wifi', (req, res) => {
    wifi.scan().then(networks => {
        res.json(
            {
                networks: networks,
            }
        );
    }).catch(error => console.log(error));
})

module.exports = router;

