import {Customer} from "./Customer";
import {CustomerType} from "./CustomerType";
import {v4 as uuidv4} from 'uuid';

class RegularCustomer extends Customer {
    private customerType:CustomerType
    constructor(customerId:any,firstName:string,lastName:string,email:string,customerType:CustomerType,rank)  {
        super(customerId,firstName,lastName,email);
        this.customerType = customerType;
        this.rank = rank;
    }
    displayDetails()
    {
        console.log('display details for customer--->\n');
        super.displayDetails();
        console.log('display details for regular customer:=====>\n')
        console.log(` ${this.rank} ${this.customerType}`)
    }

}

let john = new RegularCustomer(uuidv4(),'John','Doe','joe@example.com',CustomerType.PERMANENT, "Valued Customer");
john.displayDetails();