const express = require('express');
const router = express.Router();

// Used for getting JWT for authentication

// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.get('/', (req, res) => {
  res.send('Auth Route');
});

module.exports = router;
