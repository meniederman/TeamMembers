const fs = require("fs");
const inquirer = require("inquirer");
const iManager = require("./lib/Manager");
const iEngineer = require("./lib/Engineer");
const iIntern = require("./lib/Intern");
const iEmployee = require("./lib/Employee")
const render = require("./lib/htmlRenderer");
//const OUTPUT_DIR = path.resolve(__dirname, "output");
//const outputPath = path.join(OUTPUT_DIR, "team.html");

inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the employee name?",
    }, {
        type: "input",
        name: "id",
        message: "What is the employee ID?",

    }, {
        type: "input",
        name: "role",
        message: "What is the employee role?",

    },

    {
        type: "input",
        name: "email",
        message: "What is the employee email?",

    }

])
   .then(answers => {
       console.log(answers.name);
       console.log(answers.id);
       console.log(answers.role);
       console.log(answers.email)
   }
    
    );

     function inquirerManager(){
        const inManager = [{
            type:"input",
            name: "officeNumber",
            message: "What is the managers officer number?",

        }];
return inquirer.prompt(inManager);}

function inquirerEngineer(){
    const inEngineer = [{
        type:"input",
        name: "github",
        message: "What is the engineers github?",

    }];
return inquirer.prompt(inEngineer);}

function inquireIntern(){
    const inIntern = [{
        type:"input",
        name: "school",
        message: "What is the interns schoool?",

    }];
return inquirer.prompt(inIntern);}
    

