const express = require('express')
const router = express.Router()

router.get('/token', function (req, res) {
    res.send('token')
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