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
exports.RegularEmployee = void 0;
var Employee_1 = require("./Employee");
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(firstname, lastname, email, salary) {
        var _this = _super.call(this, firstname, lastname, email) || this;
        _this._salary = salary;
        return _this;
    }
    Object.defineProperty(RegularEmployee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    RegularEmployee.prototype.createEmployee = function (firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    };
    RegularEmployee.prototype.displayEmployee = function () {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.salary);
    };
    return RegularEmployee;
}(Employee_1.Employee));
exports.RegularEmployee = RegularEmployee;
