const BankDetailController = require('../../controller/users/bank-details');
const express = require('express');

const router = express.Router();

router.get('/', BankDetailController.getBankDetails);

router.post('/', BankDetailController.createBankDetail);

router.get('/:id', BankDetailController.getBankDetail);

router.delete('/:id', BankDetailController.deleteBankDetail);


router.put('/:id', BankDetailController.updateBankDetail);



module.exports = router;
