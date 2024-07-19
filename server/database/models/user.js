const conn = require('../index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  // Function to authenticate user during login
  authenticate: (user, callback) => {
    const sql = 'SELECT * FROM user WHERE username = ?';
    conn.query(sql, [user.username], async (error, results) => {
      if (error) {
        return callback(error, null);
      }

      if (results.length > 0) {
        const isMatch = await bcrypt.compare(user.password, results[0].password);
        if (isMatch) {
          const id = results[0].id;
          const token = jwt.sign({ id }, "jwtSecretKey", { expiresIn: 3600 });
          const responseData = {
            message: 'Authentication successful',
            id: id,
            username: results[0].username,
            token: token,
            expiresIn: 3600, // expires in 1 hour (in seconds)
          };
          return callback(null, responseData); // Return the authenticated user data
        } else {
          return callback(null, null); // Password does not match
        }
      } else {
        return callback(null, null); // No user found
      }
    });
  },

  // Function to register a new user
  register: (newUser, callback) => {
    const sql = 'SELECT * FROM user WHERE username = ?';
    conn.query(sql, [newUser.username], async (error, results) => {
      if (error) {
        return callback(error, null);
      }

      if (results.length > 0) {
        return callback(new Error('User already exists'), null);
      } else {
        const sqlInsert = 'INSERT INTO user (username, password) VALUES (?, ?)';
        conn.query(sqlInsert, [newUser.username, newUser.password], (err, result) => {
          if (err) {
            return callback(err, null);
          }

          const id = result.insertId;
          const token = jwt.sign({ id }, "jwtSecretKey", { expiresIn: 3600 });
          const responseData = {
            message: 'User registered successfully',
            id: id,
            username: newUser.username,
            token: token,
            expiresIn: 3600, // expires in 1 hour (in seconds)
          };
          return callback(null, responseData); // Return the registered user data
        });
      }
    });
  }
};
