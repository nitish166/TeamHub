const authService = require('../services/auth.service');

const signup = async (req, res) => {
  try {
    const token = await authService.signup(req.body);
    res.status(201).json({ success: true, token });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { signup, login };