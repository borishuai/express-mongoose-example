var express = require('express');
var router = express.Router();

var user = require('../controllers/user');

/* GET users listing. */
router.all('/login', user.login);

router.all('/register', user.register);

module.exports = router;
