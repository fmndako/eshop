const UserController = require('../../controller/admin/users');
const express = require('express');

const router = express.Router();

router.get('/', UserController.getUsers);

router.get('/', UserController.getUser);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;