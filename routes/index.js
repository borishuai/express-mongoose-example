var express = require('express');
var router = express.Router();

var user = require('../controllers/user');

/* GET users listing. */
router.get('/', user.list);

module.exports = router;
