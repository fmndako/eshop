const orderController = require('../../controller/merchant/order');
const express = require('express');

const router = express.Router();

router.get('/:id', orderController.getOrder);

router.get('/', orderController.getOrders)

router.put('/', orderController.updateOrder);


module.exports = router;
