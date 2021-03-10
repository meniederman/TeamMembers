// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
class engineer extends Employee{
    constructor (github, role){
        super ("","","");
        this.github = github;
        this.role = role;
    }
    getRole() {
        this.role.forEach(title =>console.log(title))
    
    }

    getGithub (){
        console.log(this.github);
    }


}
const engineerRole = ["Engineer"];


const engineer = new engineer ('', engineerRole);

console.log('---ENGINEER---');
engineer.printInfo();
engineer.getRole();
engineer.getGithub();