const express = require('express');
const apiRouter = express();
const users  = require('./users');
const products  = require('./products');
const orders  = require('./orders');





apiRouter.use('/', users);
apiRouter.use('/products', products); 
apiRouter.use('/orders', orders);



module.exports = apiRouter;