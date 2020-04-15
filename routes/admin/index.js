const express = require('express');
const apiRouter = express();
// const users  = require('./users');
const products  = require('./products');
const orders  = require('./orders');
const payments  = require('./payments');
const merchants  = require('./merchant');
const categories  = require('./categories');

// apiRouter.use('/', users);
apiRouter.use('/products', products);
apiRouter.use('/orders', orders);
apiRouter.use('/payments', payments);
apiRouter.use('/merchants', merchants);
apiRouter.use('/categories', categories);



module.exports = apiRouter;