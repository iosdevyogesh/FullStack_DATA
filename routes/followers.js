var express = require('express');
var router = express.Router();
var passport = require('passport');
const userController = require('../controllers/users');

const {Followers} = require('../models/followers');
const {Customer} = require('../models/users');
router.get('/:userId', async function(req, res, next) {

    const followers = await Followers.find({userId: req.params.userId});
    console.log('Customer'+followers);

    if (followers.length==0) {
        console.log('No followers found');
        //res.send({success: false,  message: "No followers found"});
        res.render('followers', { data:{ titleView: 'Followers Page',  customer: req.session.user , isAuthenticated: req.session.isLoggedIn  } });
        //res.end();



    }
    else {
        console.log('Inside get followers');
        let followIDs=[];
        for (let i=0;i<followers.length;i++)
            followIDs.push(followers[i].followUserId);


        console.log(followIDs);
        //res.send({success: true, data: { followers }});
        userController.getUsers(followIDs,function(err,cust){
            //console.log(cust);
            res.render('followers', { data:{ titleView: 'Followers Page',  customer: req.session.user , isAuthenticated: req.session.isLoggedIn  , followers: followers, users:cust } });

        })

        //res.end();
        //res.send(customer);

}});

//router.post('/add-follower',passport.authenticate('jwt', { session: false }),async function(req, res, next) {
router.post('/add-follower',async function(req, res, next) {
console.log(req.body);
console.log("inside add follower");

    const customer = await Customer.find({userId: req.body.followeruserId });
    console.log('Customer'+customer);
    if (!!customer) {
        let follower = {
            userId: req.body.userId,
            followUserId: req.body.followeruserId,
        };
        console.log("Follower initialized");
        Followers.create(follower, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                // item.save();
                res.redirect('/');
            }});

    }




});
/*
router.delete(':userId', async function(req, res, next) {

    console.log(req.params.userId);
    const result = await Followers.deleteMany({userId:req.params.userId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});
*/

router.delete('/', async function(req, res, next) {
    console.log(req.body);
    //console.log(req.params.userId);
    const result = await Followers.deleteOne({userId:req.body.userId, followUserId:req.body.followUserId});
    console.log(result);

    res.send({success: true,  message: "record deleted"});
    //res.send('respond with a delete resource');
});


module.exports = router;

