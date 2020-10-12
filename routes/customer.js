//const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Customer = mongoose.model('Customer', new mongoose.Schema({

    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
    },

    isGold: {
        type: Boolean,
        default: false
    },

    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }

}));

router.post('/', async (req, res) => {
    /*
       const { error } = validateCustomer(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    */
    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });

    customer = await customer.save().then(function (){
        console.log("Customer saved");
        res.send(customer);
    }).catch(reason => {
        console.log('validation error',reason.message);
        res.status(400).send(reason.message);
    })

});
//Get all Gold Customers
router.get('/Gold/:isGold', async(req, res) => {
    let result = await Customer.find({isGold: req.params.isGold});
    console.log('Display Gold Customers'+ result);
    res.send(result);
});

//Get Customer with ID
router.get('/id/:id', async(req, res) => {
    let result = await Customer.find({_id: req.params.id});
    console.log('Display Customer with ID'+ result);
    res.send(result);
});

//Get all Customers
router.get('/', async(req, res) => {
    let result = await Customer.find();
    console.log('Display Customers'+ result);
    res.send(result);
});

router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});

router.put('/updatefirst/:id', async (req, res) => {
    //update One record
    const customer = await Customer.findOneAndUpdate(req.params.id,
        {name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        },{new:true});
    if ((!customer)) {
        return res.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});
//updates all records
router.put('/updateall/:isGold', async (req, res) => {
    const customer = await Customer.updateMany({isGold: req.params.isGold},
        {name: "Gold  : "+ req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        },{new:true});
    if ((!customer)) {
        return res.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});

/*
function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}
*/

module.exports = router;