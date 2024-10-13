const express = require('express');
const signup = require('../controllers/user/signup'); // Adjust the path as necessary
const login = require('../controllers/user/login'); // Adjust the path as necessary

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;