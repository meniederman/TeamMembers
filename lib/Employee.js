// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;

}

getName(){
    console.log(this.name);
}
getID(){
    console.log(this.id);
}

getEmail(){
    console.log(this.email);
}

getRole = function() {
    this.role = 'Employee';
    return console.log(this.role);
}
printInfo() {
    console.log(`This employees name is ${this.name}`);
    console.log(`This employees id is ${this.id} `);
    console.log(`This employees email is ${this.email}`);
}

}

module.exports = Employee;
