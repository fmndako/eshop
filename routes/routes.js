const express = require('express');
const apiRouter = express();
const user  = require('./users');

apiRouter.use('/users', user);


module.exports = apiRouter;