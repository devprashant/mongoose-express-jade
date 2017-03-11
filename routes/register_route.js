var express = require('express');
var router = express.Router();
var register = require('./register');

router.get('/', register.index);
router.post('/create', register.create);
router.post('/delete', register.delete);

module.exports = router;