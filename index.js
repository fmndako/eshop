var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var { handleError, ErrorHandler} = require('./utilities/error');

require('dotenv').config();
require('./db/db');

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

module.exports = app;
