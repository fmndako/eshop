const express = require('express');
const apiRouter = express();
const product = require ('./product');
const order = require('./order');
const bankDetails = require('./bankDetails');
const payment = require('./payment');
const category = require('./category');
const discount = require('./discount');

apiRouter.use('/product', product);
apiRouter.use('/order', order);
apiRouter.use('/payment', payment);
apiRouter.use('/bankDetails', bankDetails);
apiRouter.use('/category', category);
apiRouter.use('/discount', discount)

module.exports = apiRouter;