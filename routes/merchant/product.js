const MerchantController = require('../../controller/merchant/product');
const express = require('express');

const router = express.Router();

router.get('/', MerchantController.getProducts);
router.get('/:id', MerchantController.getProduct);
router.post('/', MerchantController.createProduct);
router.delete('/:id', MerchantController.deleteProduct);
router.put('/:id', MerchantController.updateProduct);


module.exports = router;
