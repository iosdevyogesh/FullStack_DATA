var express = require('express');
var router = express.Router();

/* GET Upload page. */
router.get('/:userId', async function( req, res, next) {
    console.log("Inside Upload");
    res.render('singlemedia', { data:{ titleView: 'Single Media Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn} });
});

/* GET Upload page. */
router.get('/:many/:userId', async function( req, res, next) {
    console.log("Inside Upload");
    res.render('multiplemedia', { data:{ titleView: 'Multiple Media Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn} });
});
module.exports = router;


