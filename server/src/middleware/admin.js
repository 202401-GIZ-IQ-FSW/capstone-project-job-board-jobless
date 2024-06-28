const User = require('../models/user');

const admin = async (req, res, next) => {
  const user = await User.findById(req.user);

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
};

module.exports = admin;
