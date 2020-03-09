const OrderController = require('../../controller/users/orders');
const express = require('express');

const router = express.Router();

router.get('/', OrderController.getOrders);

router.get('/:id', OrderController.getOrder);

router.put('/:id', OrderController.updateOrder);


module.exports = router;
