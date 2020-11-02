var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.isLoggedIn) {
		res.render('index', { data:{ titleView: 'Welcome Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn} });
	} else
	{
		res.render('index', { data:{ titleView: 'Welcome Page', isAuthenticated: false} });		
	}
  
});






module.exports = router;
