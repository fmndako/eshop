const mongoose = require("mongoose");
var logger = require('./../logger/logger');
const Grid = require('gridfs-stream');

mongoose.connect(process.env.DB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
let gfs;
const db = mongoose.connection;
db.on("error", () => {
    logger.info('error connecting to database');

});
db.once("open", () => {
    logger.info('connected to mongo database');
    gfs = Grid(db.db, mongoose.mongo);
    gfs.collection('photos');
    module.exports = {gfs}
    console.log('server started');
   
});
module.exports = {mongoose, db};