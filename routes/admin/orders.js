const OrderController = require('../../controller/admin/orders');
const express = require('express');

const router = express.Router();

router.get('/', OrderController.getOrders);

router.get('/:id', OrderController.getOrder);

router.put('/:id', OrderController.updateOrder);

router.delete('/:id', OrderController.deleteOrder);


module.exports = router;
