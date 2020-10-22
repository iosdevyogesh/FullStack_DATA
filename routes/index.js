var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data:{ titleView: 'Welcome Page'} });
});

/* GET home page. */
router.get('/search', function(req, res, next) {
  res.render('search', { data:{ titleView: 'Search Page'} });
});




module.exports = router;
