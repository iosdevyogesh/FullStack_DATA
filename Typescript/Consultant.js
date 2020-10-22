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
exports.Consultant = void 0;
var Employee_1 = require("./Employee");
var Consultant = /** @class */ (function (_super) {
    __extends(Consultant, _super);
    function Consultant(firstname, lastname, email, hourlyamount, specialization) {
        var _this = _super.call(this, firstname, lastname, email) || this;
        _this.hourlyamount = hourlyamount;
        _this.specialization = specialization;
        return _this;
    }
    Object.defineProperty(Consultant.prototype, "hourlyamount", {
        get: function () {
            return this._hourlyamount;
        },
        set: function (value) {
            this._hourlyamount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consultant.prototype, "specialization", {
        get: function () {
            return this._specialization;
        },
        set: function (value) {
            this._specialization = value;
        },
        enumerable: false,
        configurable: true
    });
    Consultant.prototype.createEmployee = function (firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    };
    Consultant.prototype.displayEmployee = function () {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.hourlyamount);
        console.log(this.specialization);
    };
    return Consultant;
}(Employee_1.Employee));
exports.Consultant = Consultant;
