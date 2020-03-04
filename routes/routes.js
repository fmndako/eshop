const express = require('express');
const apiRouter = express();
const user  = require('./users/index');

apiRouter.use('/users', user);


module.exports = apiRouter;