// start.js
const app = require('./index');
var logger = require('./logger/logger');

var port = process.env.PORT || 3070;

app.listen(port, function(err) {
    logger.info('running server on from port  :::' + port);
});