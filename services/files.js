const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
var logger = require('./../logger/logger');
const { ErrorHandler } = require('../utilities/error');



class FileService {
    async getGfsInstance (){
        try{
            await mongoose.connect(process.env.DB_URL, { 
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });
            let gfs;
            const db = await mongoose.connection;
            logger.info('uploading images');
            gfs = await Grid(db.db, mongoose.mongo);
            await gfs.collection('photos');
            return gfs;
    
        }catch(err){
            logger.error(err);
        }
    }
    async getFiles () {
        try {
            logger.info('getting file');
        } catch (e) {
            throw new ErrorHandler(400,'Error while Paginating Files');
        }
    }
    async createFile (body) {
        try{
            logger.info(body);
        
        }
        catch(err){
            throw new ErrorHandler(400, err);
        }
    }

    async updateFile (fileId, body) {
        try{
            logger.info('getting file');
        }
        catch(err){
            throw new ErrorHandler(400,'Error updating file');
        } 
    }

    async deleteFile (fileId){
        try{

            logger.info('deleting file');

        }
        catch(err){
            throw new ErrorHandler(400,'Error Deleteing file');
        }
    }
}




module.exports = new FileService();