const express = require('express');
const router = express.Router();
const salecontrollers = require('../controllers/sale');

// Define routes
router.get('/getAll', salecontrollers.getAll);
router.get('/:id', salecontrollers.getOne);
router.post('/add', salecontrollers.addsalty);
router.put('/:id', salecontrollers.updatesalty);
router.delete('/:id', salecontrollers.deletesalty);

module.exports = router;
