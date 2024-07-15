const express = require('express');
const router = express.Router();
const sucreController = require('../controllers/sucre');

// Define routes
router.get('/getAll', sucreController.getAll);
router.get('/:id', sucreController.getOne);
router.post('/add', sucreController.addsweet);
router.put('/:id', sucreController.updatesweet);
router.delete('/:id', sucreController.deletesweet);

module.exports = router;
