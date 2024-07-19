const express = require('express');
const { register, auth } = require('../controllers/user');

const router = express.Router();

router.post('/signup', register);
router.post('/login', auth);

module.exports = router;
