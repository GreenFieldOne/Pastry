const conn = require('../index');
module.exports = {
    add: function (panier, callback) {
    const sql = 'INSERT INTO `panier` (idproduit ,image, prix, quantite) VALUES (?, ?, ?,?)';
    const values = [panier.idproduit, panier.image, panier.prix, panier.quantite];
    conn.query(sql, values, function (error, results) {
        callback(error, results);
    })},

    getAll: function (callback) {
        const sql = 'SELECT * FROM `panier`';
        conn.query(sql, function (error, results) {
            callback(error, results);
        });
    },
    delete: function (id, callback) {
        const sql = 'DELETE FROM `panier` WHERE idproduit = ?';
        conn.query(sql, [id], function (error, results) {
            if (error) {
                callback(error, null);
              } else {
                callback(null, results);
              }
        });
    },
    update: function (id, panier, callback) {
        const sql = 'UPDATE `panier` SET quantite = ? WHERE idproduit = ?';
        const values = [panier.quantite, id];
        conn.query(sql, values, function (error, results) {
            callback(error, results);
        });
    }
}