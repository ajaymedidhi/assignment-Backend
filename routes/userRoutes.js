// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register); //Working
router.post('/login', UserController.login);      //Working
router.get('/profile', UserController.getProfile); //Test

module.exports = router;
