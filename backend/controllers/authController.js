// backend/controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Register User
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      token: generateToken(user.id)
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      token: generateToken(user.id)
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Reset Password
const resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();

  res.json({ message: 'Password has been reset successfully' });
};

module.exports = { registerUser, loginUser, resetPassword };
