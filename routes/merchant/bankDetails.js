const bankDetailsController = require('../../controller/merchant/bankDetails');
const express = require('express');

const router = express.Router();

router.get('/:id', bankDetailsController.getBankDetail);

router.get('/', bankDetailsController.getBankDetails);


module.exports = router;
