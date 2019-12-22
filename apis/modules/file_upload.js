const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');

const multer = require('multer');
const DIR = './uploads';



let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage });

router.post('/upload', upload.single('photo'), (req, res) => {
    console.log(__dirname)
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        return res.send({
            success: true,
            path: 'localhost:3200/uploads/'
        })
    }
})

module.exports = router;