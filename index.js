var express = require("express");
var bodyParser = require("body-parser");
var logger = require('./logger/logger');
var app = express();
var moongoose = require('mongoose');

require('dotenv').config();
var port = process.env.PORT || 3070;

moongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use(bodyParser.json());    

app.get("/", function(req, res) {
    logger.info('default route');
    res.send("App works!!");
})

app.use("/api/1/", require("./routes/routes"));

app.get("*", function(req, res) {
    res.send("404 Page not found");
 })

app.listen(port, function(err) {
    logger.info("running server on from port:::::::" + port);
});