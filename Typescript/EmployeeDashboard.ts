import { RegularEmployee} from "./RegularEmployee";
import {Consultant} from "./Consultant";
import {EmployeeType} from "./EmployeeType";

let regEmp = new RegularEmployee("John","Smith","jsmith@test.com",3456);
regEmp.displayEmployee();
let regEmp2 =  new RegularEmployee("Wish","Will","wislh@test.com",421);
regEmp2.displayEmployee();
let  consEmp = new Consultant("Joest","poo","test@tets.com",34,EmployeeType.DEVELOPER);
consEmp.displayEmployee();


regEmp2.createEmployee("Dash","Will","jwill@test.com");
regEmp2.salary=3456;

consEmp.createEmployee("Bosh","Node","tenode@tets.com");
consEmp.hourlyamount=34;
consEmp.specialization=EmployeeType.DEVELOPER;
consEmp.displayEmployee();