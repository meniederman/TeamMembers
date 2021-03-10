// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Manager extends Employee{
    constructor (officeNumber, role){
        super ("","","");
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getRole() {
        this.role.forEach(title =>console.log(title))
    
    }


}
const managerRole = ["Manager"];


const manager = new Manager('', managerRole);

console.log('---MANAGER---');
manager.printInfo();
manager.getRole();