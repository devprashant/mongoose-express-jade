var express = require('express');
var router = express.Router();
var product = require('./product');

router.get('/', product.index);
router.post('/create', product.create);
router.post('/delete', product.delete);
router.post('/update', product.update);

module.exports = router;