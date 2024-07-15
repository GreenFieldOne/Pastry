const express = require('express');
const router = express.Router();
const salecontrollers = require('../controllers/jus');

// Define routes
router.get('/getAll', salecontrollers.getAll);
router.get('/:id', salecontrollers.getOne);
router.post('/add', salecontrollers.addjuice);
router.put('/:id', salecontrollers.updatejuice);
router.delete('/:id', salecontrollers.deletejuice);

module.exports = router;
