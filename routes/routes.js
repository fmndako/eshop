const express = require('express');
const apiRouter = express();
const users  = require('./users/index');
const admin = require('./admin/index');
const merchants  = require('./merchant/index');

const uploads  = require('./uploads');
const auth  = require('./auth');

const isAuthenticated = require('../middleware/isAuthenticated');



apiRouter.use('/', auth);

apiRouter.use('/users', isAuthenticated, users);
// apiRouter.use('/admin', admin);
apiRouter.use('/merchants', merchants);

apiRouter.use('/file', isAuthenticated, uploads);


module.exports = apiRouter;