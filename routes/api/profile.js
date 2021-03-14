const express = require('express');
const router = express.Router();

// Anything to do with profiles, fetching, adding, updating, and so on.

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Profile Router');
});

module.exports = router;
