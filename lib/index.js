// Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const employee1 = new Employee ("Max", "25", "maximus@notreal.com");
const manager1 = new Manager ("Max", "25", "maximus@notreal.com", "15");
const engineer1 = new Engineer ("Max", "25", "maximus@notreal.com", "engineer1@github.com");
const intern1 = new Intern ("Max", "25", "maximus@notreal.com", "Coding University");

console.log(employee1);
console.log(manager1);
console.log(engineer1);
console.log(intern1);

const generateHTML = require('./index.js');

// Input Prompt Questions
const questions = [
    {
        type: "input",
        name: "employeeName",
        message: "What is your employee name?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is your employee id?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        validate: (value)=>{ if(value){return true} else {return 'I need an input to continue'}}
      },
]

const writeFileAsync = util.promisify(fs.writeFile);

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
      const html = generateHTML(answers);

      return writeFileAsync("HTML", html)
    })
    .then(() => console.log("Success!"))
    .catch(err => console.error(err));
}

// Function call to initialize app
init();