const express = require('express');
const router = express.Router();
const paniercontrollers = require('../controllers/cart');

router.post('/addProduct', paniercontrollers.addProduct);
router.get('/getAll', paniercontrollers.getAll);
router.put('/:id', paniercontrollers.updateInBasket);
router.delete('/:id', paniercontrollers.deleteFromBasket);
module.exports = router;
