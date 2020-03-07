const upload = require('../middleware/uploads');
// let {db, gfs} = require('../db/db')
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
// var gfs = Grid(db, mongo)
// var gfs = Grid(db, mongo);


class UploadController{
    async uploadFile (req, res) {   
        try {
            let uploaded = await upload(req, res);
            console.log(req.file);
            if (req.file === undefined) {
                return res.processError(400, 'You must select a file.');
            }
            return res.send(req.file);
        } catch (error) {
            console.log(error);
            return res.processError(400, `Error when trying upload image: ${error}`);
        }
    }
    async gfsFile (req, res) {  
        try{
        if (req.file) {
          return res.json({
            success: true,
            file: req.file
          });
        }
        res.send({ success: false });
    }catch(err){

      }
    }

    async viewFile (req, res) {   
        try {
            let {db, gfs} = require('../db/db')
            
            gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
                if(!files || files.length === 0){
                  return res.status(404).json({
                    message: "Could not find file"
                  });
                }
                var readstream = gfs.createReadStream({
                  filename: files[0].filename
                })
                res.set('Content-Type', files[0].contentType);
                return readstream.pipe(res);
              });
            
            
            
            
            
            
            
            
            
            
            
            
            // let fileName = req.params.filename;  
            // //Connect to the MongoDB client

            // const collection = db.collection('photos.files');    
            // const collectionChunks = db.collection('photos.chunks');
            // collection.find({filename: fileName}).toArray(function(err, docs){        
            //     if(err){        
            //     return res.render('index', {
            //         title: 'File error', 
            //         message: 'Error finding file', 
            //         error: err.errMsg});      
            //     }
            // if(!docs || docs.length === 0){        
            //     return res.render('index', {
            //     title: 'Download Error', 
            //     message: 'No file found'});      
            //     }else{
            
            //     //Retrieving the chunks from the db          
            //     collectionChunks.find({files_id : docs[0]._id})
            //     .sort({n: 1}).toArray(function(err, chunks){          
            //         if(err){            
            //         return res.render('index', {
            //             title: 'Download Error', 
            //             message: 'Error retrieving chunks', 
            //             error: err.errmsg});          
            //             }
            //         if(!chunks || chunks.length === 0){            
            //             //No data found            
            //             return res.render('index', {
            //                 title: 'Download Error', 
            //                 message: 'No data found'});          
            //             }
                    
            //         let fileData = [];          
            //         for(let i=0; i<chunks.length;i++){            
            //         //This is in Binary JSON or BSON format, which is stored               
            //         //in fileData array in base64 endocoded string format               
                    
            //         fileData.push(chunks[i].data.toString('base64'));          
            //         }   
                    
            //         //Display the chunks using the data URI format          
            //         let finalFile = 'data:' + docs[0].contentType + ';base64,' 
            //             + fileData.join('');          
            //             res.render('imageView', {
            //             title: 'Image File', 
            //             message: 'Image loaded from MongoDB GridFS', 
            //             imgurl: finalFile});
            //     });      
            // }      
            // });      
        } catch (error) {
            console.log(error);
            return res.processError(400, `Error when trying upload image: ${error}`);
        }
    }
        

}

module.exports = new UploadController();