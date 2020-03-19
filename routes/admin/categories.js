const CategoriesController = require('../../controller/admin/categories');
const express = require('express');

const router = express.Router();

router.get('/', CategoriesController.getCategories);

router.post('/', CategoriesController.createCategory);

router.get('/:id', CategoriesController.getCategory);

router.put('/:id', CategoriesController.updateCategory);

router.delete('/:id', CategoriesController.deleteCategory);


module.exports = router;
