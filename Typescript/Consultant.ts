import {Employee} from "./Employee";
import {EmployeeType} from "./EmployeeType";

export class Consultant extends Employee {

    private _hourlyamount: number;
    private _specialization: number;

    constructor(firstname: string, lastname: string, email: string, hourlyamount: number, specialization: number) {
        super(firstname, lastname, email);
        this.hourlyamount=hourlyamount;
        this.specialization=specialization;
    }
    get hourlyamount(): number {
        return this._hourlyamount;
    }

    set hourlyamount(value: number) {
        this._hourlyamount = value;
    }

    get specialization(): number {
        return this._specialization;
    }

    set specialization(value: number) {
        this._specialization = value;
    }

    createEmployee(firstname: string, lastname: string, email: string) {
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
    }

    displayEmployee() {
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.hourlyamount);
        console.log(this.specialization);

    }


}