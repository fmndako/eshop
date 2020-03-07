const express = require('express');
const apiRouter = express();
const user  = require('./users/index');
const uploads  = require('./uploads');
const isAuthenticated = require('../middleware/isAuthenticated');


apiRouter.use('/users', user);

apiRouter.use('/file', isAuthenticated, uploads);


module.exports = apiRouter;