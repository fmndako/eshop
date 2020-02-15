const jwt = require('jsonwebtoken');
const User = require('../models/users');

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : null;
        if (!token){res.processError(401, 'Token not provided');}
        const data = jwt.verify(token, process.env.JWT_KEY);
    
        const user = await User.findOne({ _id: data._id, 'tokens.token': token });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.processError(401, 'Not authorized to access this resource' );
    }

};
module.exports = auth;