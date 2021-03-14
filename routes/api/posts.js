const express = require('express');
const router = express.Router();

// We can like, comment on a post.

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.send('Posts Router');
});

module.exports = router;
