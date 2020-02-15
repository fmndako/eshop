var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var moongoose = require('mongoose');
var logger = require('./logger/logger');

var { handleError, ErrorHandler} = require('./utilities/error');

require('dotenv').config();
var port = process.env.PORT || 3070;

moongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}); 


app.use(bodyParser.json());    
app.use(function middleware1(req, res, next){
    res.processError = function(code, error){
        error = error.message ? error.message : error;
        code = code ? code : 400;
        this.status(code).send({error: error});
    };
    next();      
});

app.get('/', function(req, res) {
    res.send('App works!!');
});

app.use('/api/1/', require('./routes/routes'));

app.get('*', function(req, res) {
    throw new ErrorHandler(404, 'request not found');
});
app.use((err, req, res, next)=> {
    handleError(err, res);
});

app.listen(port, function(err) {
    logger.info('running server on from port:::::::' + port);
});