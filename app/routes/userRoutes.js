const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.get('/getUsers', userController.getAllUsers);
router.get('/getUser/:id', userController.getUserById);
router.post('/createUser', userController.createUser); // Add new user

module.exports = router;
