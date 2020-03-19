const PaymentController = require('../../controller/admin/payments');
const express = require('express');

const router = express.Router();

router.get('/', PaymentController.getPayments);

router.get('/:id', PaymentController.getPayment);


module.exports = router;