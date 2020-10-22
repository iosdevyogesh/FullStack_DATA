"use strict";
exports.__esModule = true;
exports.Customer = void 0;
//name of the class
var uuid_1 = require("uuid");
var Customer = /** @class */ (function () {
    function Customer(customerId, firstName, lastName, email) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Customer.prototype.displayDetails = function () {
        console.log(this.customerId + " " + this.firstName + "  " + this.lastName + "  " + this.email);
    };
    return Customer;
}());
exports.Customer = Customer;
var temp = uuid_1.v4();
var arr = temp.split('-');
var myCustomer = new Customer(arr[4], 'John', 'Doe', 'abcd');
myCustomer.displayDetails();
