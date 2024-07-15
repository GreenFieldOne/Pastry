const jus = require('../database/models/jus');

module.exports = {
    addjuice: function (req, res) {
        const newjus = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image, 
            price: req.body.price
        };

        jus.add(newjus, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json({
                    message: 'New juice added successfully',
                    id: results.insertId
                });
            }
        });
    },
    deletejuice: function (req, res) {
        const jusId = req.params.id;

        jus.delete(jusId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'juice not found' });
            } else {
                res.status(200).json({ message: 'juice deleted successfully' });
            }
        });
    },
    updatejuice: function (req, res) {
        const jusId = req.params.id;
        const updatedjuice = {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price
        };

        jus.update(jusId, updatedjuice, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'juice not found' });
            } else {
                res.status(200).json({ message: 'juice updated successfully' });
            }
        });
    },
    getAll: function (req, res) {
        jus.getAll(function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'No juice found' });
            } else {
                res.status(200).json(results);
            }
        });
    },
    getOne: function (req, res) {
        const jusId = req.params.id;

        jus.getOne(jusId, function (err, results) {
            if (err) {
                res.status(500).send(err);
            } else if (results.length === 0) {
                res.status(404).json({ message: 'juice not found' });
            } else {
                res.json(results[0]);
            }
        });
    }
};
