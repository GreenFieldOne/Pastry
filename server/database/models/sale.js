const conn = require('../index');

module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM `sale`';
        conn.query(sql, function (error, results) {
            callback(error, results);
        });
    },
    getOne: function (id, callback) {
        const sql = 'SELECT * FROM `sale` WHERE idsale = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    add: function (sale, callback) {
        const sql = 'INSERT INTO `sale` (name, description, image, price) VALUES (?, ?, ?, ?)';
        const values = [sale.name, sale.description, sale.image, sale.price];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    },
    delete: function (id, callback) {
        const sql = 'DELETE FROM `sale` WHERE idsale = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    update: function (id, sale, callback) {
        const sql = 'UPDATE `sale` SET name = ?, description = ?, image = ?, price = ? WHERE idsale = ?';
        const values = [sale.name, sale.description, sale.image, sale.price, id];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    }
};
