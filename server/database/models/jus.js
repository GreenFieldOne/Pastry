const conn = require('../index');

module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM `jus`';
        conn.query(sql, function (error, results) {
            callback(error, results);
        });
    },
    getOne: function (id, callback) {
        const sql = 'SELECT * FROM `jus` WHERE idjus = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    add: function (jus, callback) {
        const sql = 'INSERT INTO `jus` (name, description, image, price) VALUES (?, ?, ?, ?)';
        const values = [jus.name, jus.description, jus.image, jus.price];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    },
    delete: function (id, callback) {
        const sql = 'DELETE FROM `jus` WHERE idjus = ?';
        conn.query(sql, [id], function (error, results) {
            callback(error, results);
        });
    },
    update: function (id, jus, callback) {
        const sql = 'UPDATE `jus` SET name = ?, description = ?, image = ?, price = ? WHERE idjus = ?';
        const values = [jus.name, jus.description, jus.image, jus.price, id];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    }
};
