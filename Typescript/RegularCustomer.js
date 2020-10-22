"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Customer_1 = require("./Customer");
var CustomerType_1 = require("./CustomerType");
var uuid_1 = require("uuid");
var RegularCustomer = /** @class */ (function (_super) {
    __extends(RegularCustomer, _super);
    function RegularCustomer(customerId, firstName, lastName, email, customerType, rank) {
        var _this = _super.call(this, customerId, firstName, lastName, email) || this;
        _this.customerType = customerType;
        _this.rank = rank;
        return _this;
    }
    RegularCustomer.prototype.displayDetails = function () {
        console.log('display details for customer--->\n');
        _super.prototype.displayDetails.call(this);
        console.log('display details for regular customer:=====>\n');
        console.log(" " + this.rank + " " + this.customerType);
    };
    return RegularCustomer;
}(Customer_1.Customer));
var john = new RegularCustomer(uuid_1.v4(), 'John', 'Doe', 'joe@example.com', CustomerType_1.CustomerType.PERMANENT, "Valued Customer");
john.displayDetails();
