const ProductController = require('../../controller/users/products');
const express = require('express');

const router = express.Router();

router.get('/', ProductController.getProducts);

router.get('/:id', ProductController.getProduct);



module.exports = router;
