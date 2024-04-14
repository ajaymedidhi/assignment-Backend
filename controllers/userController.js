// userController.js
const User = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await User.register({ username, email, password });
    res.status(201).json({ message: result.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.login(email, password);
    res.json({ token: result.token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming userId is extracted from the 0token in middleware
    const userProfile = await User.getProfile(userId);
    res.json(userProfile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
