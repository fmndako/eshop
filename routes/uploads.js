const express = require('express');
const UploadController = require('../controller/uploads');
const upload = require('../middleware/uploads');

const router = express.Router();


router.post('/uploads', UploadController.uploadFile);
router.get('/:filename', UploadController.viewFile);
router.post('/files', upload, UploadController.gfsFile); 



module.exports = router;