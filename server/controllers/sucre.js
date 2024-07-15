const sucre = require('../database/models/sucre');

module.exports = {
    addsweet: function (req, res) {
        const newsucre = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image, // ensure case consistency
            price: req.body.price
        };

        sucre.add(newsucre, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json({
                    message: 'New sweet added successfully',
                    id: results.insertId
                });
            }
        });
    },
    deletesweet: function (req, res) {
        const sucreId = req.params.id;

        sucre.delete(sucreId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Sweet not found' });
            } else {
                res.status(200).json({ message: 'Sweet deleted successfully' });
            }
        });
    },
    updatesweet: function (req, res) {
        const sucreId = req.params.id;
        const updatedsweet = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price
        };

        sucre.update(sucreId, updatedsweet, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Sweet not found' });
            } else {
                res.status(200).json({ message: 'Sweet updated successfully' });
            }
        });
    },
    getAll: function (req, res) {
        sucre.getAll(function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'No sweets found' });
            } else {
                res.status(200).json(results);
            }
        });
    },
    getOne: function (req, res) {
        const sucreId = req.params.id;

        sucre.getOne(sucreId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Sweet not found' });
            } else {
                res.json(results[0]);
            }
        });
    }
};
