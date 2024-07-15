const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Define routes
router.post('/login', userController.auth);

module.exports = router;
