const express = require('express')
const router = express.Router()
var jwt = require('jsonwebtoken');


router.get('/token', function (req, res) {
    var token = jwt.sign({ userId: '16d271f7-ede5-4bda-93ef-36c5a4648864' }, 'shhhhh');
    res.status(200).send({token: token});
})

router.get('/user/all', function (req, res) {
    res.send('User list')
})

router.get('/user/:id', function (req, res) {
    res.send('User details by ID')
})

router.post('/create', function (req, res) {
    res.send('Create User')
})

router.delete('/delete', function (req, res) {
    res.send('Delete User')
})

router.patch('/user', function (req, res) {
    res.send('Update User')
})

router.get('/forget-password', function (req, res) {
    res.send('Forget Password')
})

router.get('/change-password', function (req, res) {
    res.send('Change Password')
})


module.exports = router;