const express = require('express');
const apiRouter = express();
const user  = require('./users');

apiRouter.use('/auth', user);
// apiRouter.use('/products', product);



module.exports = apiRouter;