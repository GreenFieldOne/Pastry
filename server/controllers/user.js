const bcrypt = require('bcryptjs');
const user = require('../database/models/user');

// Controller to handle user registration
const register = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password
  };
      user.register(newUser, (err, responseData) => {
        if (err) {
          console.error('Error during register:', err);
          res.status(500).json({ message: 'Internal server error' });
        } else if (!responseData) {
          res.status(401).json({ message: 'register failed' });
        } else {
          res.status(200).json(responseData);
        }
      });
};

// Controller to handle user authentication (login)
const auth = (req, res) => {
  const loginUser = {
    username: req.body.username,
    password: req.body.password
  };

  user.authenticate(loginUser, (err, responseData) => {
    if (err) {
      console.error('Error during authentication:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (!responseData) {
      res.status(401).json({ message: 'Authentication failed' });
    } else {
      res.status(200).json(responseData);
    }
  });
};

module.exports = { register, auth };
