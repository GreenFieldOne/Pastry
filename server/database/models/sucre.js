const conn = require('../index');

module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM `sucre`';
        conn.query(sql, function (error, results) {
            callback(error, results);
        });
    },
    getOne: function (id, callback) {
        const sql = 'SELECT * FROM `sucre` WHERE idsucre = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    add: function (sucre, callback) {
        const sql = 'INSERT INTO `sucre` (name, description, image, price) VALUES (?, ?, ?, ?)';
        const values = [sucre.name, sucre.description, sucre.image, sucre.price];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    },
    delete: function (id, callback) {
        const sql = 'DELETE FROM `sucre` WHERE idsucre = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    update: function (id, sucre, callback) {
        const sql = 'UPDATE `sucre` SET name = ?, description = ?, image = ?, price = ? WHERE idsucre = ?';
        const values = [sucre.name, sucre.description, sucre.image, sucre.price, id];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    }
};
