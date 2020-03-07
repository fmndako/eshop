const upload = require('../middleware/uploads');
const FileService = require('../services/files');   

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
          return res.send(req.file);
        }
        res.processError(400, 'You must select a file.');
    }catch(err){
      }
    }

    async deleteFile(req, res){
      try{
        // let id = FileService.getFile()
        await gfs.remove({ _id: fileId})
        return res.send({ success: true });
      }
      catch(err){
        res.processError(400, err)
      }

    }

    async viewFile (req, res) {   
        try {
            let gfs = await FileService.getGfsInstance();
            let files = await gfs.files.find({ filename: req.params.filename }).toArray();
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
        } catch (error) {
            console.log(error);
            return res.processError(400, `Error when trying upload image: ${error}`);
        }
    }
        
}

module.exports = new UploadController();