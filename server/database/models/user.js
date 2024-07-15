const conn = require('../index');
const jwt = require('jsonwebtoken');


module.exports = {
  authenticate: (user, callback) => {
    const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
    conn.query(sql, [user.username, user.password], (error, results) => {
      if (error) {
        return callback(error, null);
      }

      if (results.length > 0) {
        const id = results[0].id;
        const token = jwt.sign({id},"jwtSecretKey",{expiresIn: 3600});
        const responseData = {
            message: 'Authentication successful',
            id:id,
            username:results[0].username,
            token: token,
            expiresIn: 3600, // expires in 1 hour (in seconds)
          };
      
        return callback(null,responseData); // Return the authenticated user data
      } else {
        return callback(null, null); // No user found
      }
    });
  }
};
