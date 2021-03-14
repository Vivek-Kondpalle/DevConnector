const express = require('express');
const router = express.Router();

// Register users or add new users

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;
