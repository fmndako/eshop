const UserController = require('../controller/users');
const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

const router = express.Router();

router.get('/', isAdmin, UserController.getUsers);

router.post('/', UserController.createUser);

router.get('/profile', isAuthenticated, UserController.getProfile);

router.put('/profile', isAuthenticated, UserController.updateProfile);

router.post('/login', UserController.login);

router.post('/logout', isAuthenticated, UserController.logout);

router.post('/logoutall', isAuthenticated, UserController.logoutAll);

module.exports = router;