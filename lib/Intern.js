// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class Intern extends Employee{
    constructor (school, role){
        super ("","","");
        this.school = school;
        this.role = role;
    }
    getRole() {
        this.role.forEach(title =>console.log(title))
    
    }

    getSchoool (){
        console.log(this.school);
    }


}
const internRole = ["Intern"];


const intern = new Intern ('', internRole);

console.log('---INTERN---');
intern.printInfo();
intern.getRole();
intern.getSchoool();