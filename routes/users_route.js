var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET users listing. */
router.get('/', users.all);

module.exports = router;