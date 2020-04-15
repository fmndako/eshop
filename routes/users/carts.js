const CartController = require('../../controller/users/carts');
const express = require('express');

const router = express.Router();

router.get('/', CartController.getCarts);
router.post('/checkout', CartController.checkoutCart);


router.post('/:productDetailId', CartController.addCart);


router.delete('/:id', CartController.removeCart);




module.exports = router;
