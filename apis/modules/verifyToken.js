const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    console.log("Token from Angular UI ", token)
    if(token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    next();
    /* const verified = jwt.verify(token, process.env.SECRET_CODE);
    if(verified._id) {
        next();
    } else {
        res.status(400).send("Invalid Token");
    } */
}