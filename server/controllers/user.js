const user = require('../database/models/user');

const auth = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  user.authenticate(newUser, function (err, user) {
    if (err) {
      res.status(500).json({ message: 'Internal server error' });
    } else if (!user) {
      res.status(401).json({ message: 'Authentication failed' });
    } else {
      res.status(200).json({  user });
    }
  });
};

module.exports = { auth };
