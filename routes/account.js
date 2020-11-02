var express = require('express');
var router = express.Router();
const {Customer} = require('../models/users');
const {Blockedusers} = require('../models/blockedusers');
const userController = require('../controllers/users');
/* GET search page. */


router.get('/search', async function(req, res, next) {
	const customers = await Customer.find({});
	console.log(customers);

    res.render('search', { data:{ titleView: 'Search Page',customer: req.session.user , isAuthenticated: req.session.isLoggedIn,isAccount:true,users: customers} });
});

router.get('/newsfeed', function(req, res, next) {
    res.render('newsfeed', { data:{ titleView: 'NewsFeed Page',customer: req.session.user , isAuthenticated: req.session.isLoggedIn,isAccount:true} });
});

router.get('/blocked', async function(req, res, next) {
	const blockedUsers = await Blockedusers.find({userId:'5f90047c447128608075a32d'});
	console.log(blockedUsers);
	let blockIDs=[];
    for (let i=0;i<blockedUsers.length;i++)
        blockIDs.push(blockedUsers[i].blockedUserId);
	userController.getUsers(blockIDs,function(err,cust){
    //console.log(cust);
    res.render('blockedaccounts', { data:{ titleView: 'Blocked Users Page',customer: req.session.user , isAuthenticated: req.session.isLoggedIn,isAccount:true,blockedUsers: blockedUsers, users:cust} });


})

    
});

router.get('/update', function(req, res, next) {
    res.render('editprofile', { data:{ titleView: 'Update Profile Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn,isAccount:true} });
});

router.get('/logout', function(req, res, next) {

	req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });

});

module.exports = router;