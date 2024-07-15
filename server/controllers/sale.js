const sale = require('../database/models/sale');

module.exports = {
    addsalty: function (req, res) {
        const newsale = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image, 
            price: req.body.price
        };

        sale.add(newsale, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json({
                    message: 'New salty added successfully',
                    id: results.insertId
                });
            }
        });
    },
    deletesalty: function (req, res) {
        const saleId = req.params.id;

        sale.delete(saleId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'salty not found' });
            } else {
                res.status(200).json({ message: 'salty deleted successfully' });
            }
        });
    },
    updatesalty: function (req, res) {
        const saleId = req.params.id;
        const updatedsalty = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price
        };

        sale.update(saleId, updatedsalty, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'salty not found' });
            } else {
                res.status(200).json({ message: 'salty updated successfully' });
            }
        });
    },
    getAll: function (req, res) {
        sale.getAll(function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'No saltys found' });
            } else {
                res.status(200).json(results);
            }
        });
    },
    getOne: function (req, res) {
        const saleId = req.params.id;

        sale.getOne(saleId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'salty not found' });
            } else {
                res.json(results[0]);
            }
        });
    }
};
