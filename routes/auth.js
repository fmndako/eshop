const AuthController = require('../controller/auth');
const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.post('/logout', isAuthenticated, AuthController.logout);
router.post('/logoutall', isAuthenticated, AuthController.logoutAll);

module.exports = router;
