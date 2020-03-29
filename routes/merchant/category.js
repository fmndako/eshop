const categoryController = require('../../controller/merchant/category')
const express = require('express');

const router = express.Router();

router.get('/', categoryController.getCategory)

module.exports = router; 