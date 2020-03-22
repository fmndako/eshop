const express = require('express');
const apiRouter = express();
const product = require ('./product');
const order = require('./order');
const bankDetails = require('./bankDetails');
const payment = require('./payment');

apiRouter.use('/product', product);
apiRouter.use('/order', order);
apiRouter.use('/payment', payment);
apiRouter.use('/bankDetails', bankDetails);

module.exports = apiRouter;