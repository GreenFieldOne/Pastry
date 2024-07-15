const panier = require('../database/models/panier');
const addProduct = (req, res) => {
    const newProduct = {
        idproduit: req.body.idproduit,
        image: req.body.image,
        prix: req.body.prix, 
        quantite: req.body.quantite
    };

    panier.add(newProduct, function (err, results) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json({
                message: 'New product added successfully',
                id: results.insertId
            });
        }
    });

  };
const deleteFromBasket=(req, res)=> {
    const produit = req.params.id;

    panier.delete(produit, function (err, results) {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    });
}
const updateInBasket= (req, res) =>{
    const produitid = req.params.id;
    const updatedproduit = {
        idproduit: req.body.idproduit,
        image: req.body.image,
        prix: req.body.prix,
        quantite: req.body.quantite
    };

    panier.update(produitid, updatedproduit, function (err, results) {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'salty not found' });
        } else {
            res.status(200).json({ message: 'salty updated successfully' });
        }
    });
}
const getAll= (req, res) =>{
    panier.getAll(function (err, results) {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).json({ message: 'No saltys found' });
        } else {
            res.status(200).json(results);
        }
    });
}
  
  module.exports = { addProduct , getAll, deleteFromBasket,updateInBasket };
  