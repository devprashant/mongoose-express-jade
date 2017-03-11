var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products App' });
});

router.get('/jade-sample', (req, res, next) =>{
    res.render('jade-sample', {foo: "bars"});
});

module.exports = router;