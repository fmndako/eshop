const express = require('express');
const apiRouter = express();
const users  = require('./users');
const products  = require('./products');
const orders  = require('./orders');
const carts  = require('./carts');
const favorites  = require('./favorites');
const address  = require('./address');
const bankDetails  = require('./bank-details');



apiRouter.use('/', users);
apiRouter.use('/products', products); 
apiRouter.use('/orders', orders);
apiRouter.use('/carts', carts);
apiRouter.use('/favorites', favorites);
apiRouter.use('/address', address);
apiRouter.use('/bank-detail', bankDetails);





module.exports = apiRouter;