const ProductController = require('../../controller/admin/products');
const express = require('express');

const router = express.Router();

router.get('/', ProductController.getProducts);

router.post('/', ProductController.createProduct);

router.get('/:id', ProductController.getProduct);

router.put('/:id', ProductController.updateProduct);

router.delete('/:id', ProductController.deleteProduct);


module.exports = router;
