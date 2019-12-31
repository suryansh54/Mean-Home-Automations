const jwt = require('jsonwebtoken');

const i  = 'Suryansh Corp';   
const s  = 'suryanshsrivastava8791@gmail.com';   
const a  = 'www.example.com';

const verifyOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "HS256"
};

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    const verified = jwt.verify(token, process.env.PRIVATE_KEY, verifyOptions);
    req.userId = verified._id;
    if(verified._id) {
        next();
    } else {
        res.status(400).send("Invalid Token");
    } 
}