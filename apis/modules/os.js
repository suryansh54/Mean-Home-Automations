const express = require('express')
const router = express.Router()
const os = require('os');

router.get('/os', function (req, res) {
    res.json(
        {
            platform: os.platform(),
            architecture: os.arch(),
            cpus:os.cpus()
        }
    );
})

module.exports = router;

