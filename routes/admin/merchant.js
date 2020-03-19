const MerchantController = require('../../controller/admin/merchants');
const express = require('express');

const router = express.Router();

router.get('/', MerchantController.getUsers);

router.delete('/:id', MerchantController.deleteUser);

router.put('/:id', MerchantController.updateUser);


module.exports = router;