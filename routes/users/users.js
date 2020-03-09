const UserController = require('../../controller/users/users');
const express = require('express');

const router = express.Router();

router.get('/', UserController.getUser);

router.put('/', UserController.updateUser);

module.exports = router;
