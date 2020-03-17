const paymentController = require('../../controller/merchant/payment');
const express = require('express');

const router = express.Router();

router.get('/:id', paymentController.getPayment);

router.get('/', paymentController.getPayments);


module.exports = router;

