const discountController = require('../../controller/merchant/discount')
const express = require('express');

const router = express.Router();

router.get('/', discountController.getDiscounts)

module.exports = router; 