import {Employee} from "./Employee";

export class RegularEmployee extends Employee {
    private _salary: number;

    constructor(firstname: string, lastname: string, email: string,salary:number) {
        super(firstname,lastname,email);
        this._salary = salary;
    }


    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
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
        console.log(this.salary);
    }
}