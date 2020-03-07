const mongoose = require("mongoose");
var logger = require('./../logger/logger');

mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", () => {
    logger.info('error connecting to database');

});
db.once("open", () => {
    logger.info('connected to mongo database');
   
});
module.exports = {mongoose, db};