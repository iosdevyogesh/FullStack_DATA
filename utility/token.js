
const {Customer} = require('../models/users');
let jwt = require('jsonwebtoken');
const jwtOptions = require('./jwt-options');


module.exports = function(customer, res){
    // actual must be in database, find data if matched

    //var isValid = false;
    console.log(customer);
    if(!!customer){

        //console.log("inside token creation"+customer[0]._id);
        //console.log(customer.username);
        //console.log(customer.emailid);
        var payload = {id: customer._id, username: customer.username, email: customer.emailid};

        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        res=token;
        return token;
        //res.json({success: true, token: token});

    } else {
        //res.json({success: false, message:"User not found in database"});
        res="";
    }

}
