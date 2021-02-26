// Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// console.log(employee1);
// console.log(manager1);
// console.log(engineer1);
// console.log(intern1);
// console.log(employee1.getRole());

const team = [];

const questions = [
    {
        type: "input",
        name: "employeeName",
        message: "What is your employee name?",
        validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is your employee id?",
        validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
    },
]

const managerQuestion = {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
    validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
};

const internQuestion = {
    type: "input",
    name: "school",
    message: "What school do you go to?",
    validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
}

const engineerQuestion = {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
    validate: (value) => { if (value) { return true } else { return 'I need an input to continue' } }
}

// Input Prompt Questions
inquirer.prompt([
    ...questions
]).then((answers) => {
    console.log(answers);
    determineEmployee();
});

function determineEmployee() {
    // ask whether to create an engineer, intern, or to stop
    inquirer.prompt({
        type: "list",
        name: "job",
        message: "Which of the following is your job?",
        choices: ["Manager", "Engineer", "Intern", "Stop"],
        validate: (value) => { if (value) { return true } else { return 'I need an input to continue'}
        }}).then((answers) => {
            if (answers.job === "Engineer") {
                createEngineer();
            }
            if (answers.job === "Intern") {
                createIntern();
            }
            if (answers.job === "Manager") {
                createManager();
            }
            if (answers.job === "Stop") {
                init();
            }
        })
    }

function createManager() {
    inquirer.prompt([
        ...questions, managerQuestion
    ]).then((answers) => {
        const manager = new Manager(answers.employeeName, answers.employeeId, answers.email, answers.officeNumber);
        team.push(manager);
        determineEmployee();
    });
}

function createIntern() {
    inquirer.prompt([
        ...questions, internQuestion
    ]).then((answers) => {
        const intern = new Intern(answers.employeeName, answers.employeeId, answers.email, answers.school);
    team.push(intern);
    determineEmployee();
    })
}

function createEngineer() {
    inquirer.prompt([
        ...questions, engineerQuestion
    ]).then((answers) => {
        const engineer = new Engineer(answers.employeeName, answers.employeeId, answers.email, answers.github);
    team.push(engineer);
    determineEmployee();
    })
}


// Generating HTML
function generateHTML(answers) {
    let employeeHTML = '<div class="row">'

    for (let i = 0; i < answers.length; i++) {
        let roleHTML = '';
        if (answers[i].officeNumber) {
            roleHTML = `<li class="list-group-item">Office Number: ${answers[i].officeNumber}</li>`
        }
        if (answers[i].school) {
            roleHTML = `<li class="list-group-item">School: ${answers[i].school}</li>`
        }
        if (answers[i].github) {
            roleHTML = `<li class="list-group-item">GitHub Username: ${answers[i].github}</li>`
        }
        
        employeeHTML += `
        <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Hi my name is ${answers.employeeName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.employeeId}</li>
                        <li class="list-group-item">Email: ${answers.email}</li>
                        ${roleHTML}
                        </ul>
                    </div>
        `

    }

    employeeHTML +='</div>'
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link href="style.css" rel="stylesheet">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
        <div class="container">
            ${employeeHTML}
        </div>
    </body>
    </html>`;
}


const writeFileAsync = util.promisify(fs.writeFile);

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((team) => {
        const html = generateHTML(team);

        return writeFileAsync("index.html", html)
    })
    
};