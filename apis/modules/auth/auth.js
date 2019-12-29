const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const User = require('./auth.modal');
const bcrypt = require('bcryptjs');
// const verifyToken = require('../verifyToken');


router.post('/token', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json(
            {
                type: 'error',
                message: 'Email is not found'
            }
        )
    } else {
        // Password is correct or not
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json(
                {
                    type: 'error',
                    message: 'Invalid Password'
                }
            )
        } else {
            // Creating JWT tokens if user exists
            const token = jwt.sign({ _id: user._id }, 'Dummy Secret');
            res.header('auth-token', token).status(200).json(
                {
                    token: token,
                    userName: user.name,
                    userEmail: user.email
                }
            );
        }
    }
})

router.post('/register', async (req, res) => {
    const userEmailExist = await User.findOne({ email: req.body.email });
    if (userEmailExist) {
        return res.status(400).json(
            {
                type: 'error',
                message: "Email already exists"
            }
        );
    } else {
        // Encrypt password
        const encryptPass = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, encryptPass);

        // Create an user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
            date: Date.now()
        });

        try {
            const savedUser = await user.save();
            res.send({ user: user.id });
        } catch {
            res.status(400).send(err);
        }
    }
})

// Secure Routes
router.get('/user/self', async (req, res) => {
    let token = req.headers.authorization;
    if(token) {
        const idFromToken = jwt.verify(token, process.env.SECRET_CODE)
        const user = await User.findOne({ _id: idFromToken._id });
        res.send({ user: user });
    }
})

router.get('/user/all', function (req, res) {
    res.send('User list')
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