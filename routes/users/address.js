const AddressController = require('../../controller/users/address');
const express = require('express');

const router = express.Router();

router.get('/', AddressController.getAddresses);

router.post('/', AddressController.createAddress);

router.get('/:id', AddressController.getAddress);

router.delete('/:id', AddressController.deleteAddress);


router.put('/:id', AddressController.updateAddress);



module.exports = router;
