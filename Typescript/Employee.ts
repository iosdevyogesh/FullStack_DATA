export abstract class Employee {

    private _firstname: string;
    private _lastname: string;
    private _email: string;

    constructor(firstname:string,lastname:string,email:string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }


    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(value: string) {
        this._firstname = value;
    }

    public get lastname(): string {
        return this._lastname;
    }

    public set lastname(value: string) {
        this._lastname = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    abstract displayEmployee();

    abstract createEmployee(firstname: string, lastname: string, email: string);

}

//let emp = new Employee("test","Joe","testa@test.com");
//console.log(emp.firstname+ " "+ emp.lastname+" "+ emp.email);