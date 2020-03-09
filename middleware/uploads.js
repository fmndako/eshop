const util = require('util');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const {db} = require('../db/db');


var storage = new GridFsStorage({
    db: db,
    file: (req, file) => {
        const match = ['image/png', 'image/jpeg'];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-eshope-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-eshope-${file.originalname}`
        };
    }
});

var uploadFile = multer({ storage: storage, dest: __dirname + '/uploads/images'}).single('file');
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;