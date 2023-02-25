const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamMembers = [];

// Use Inquirer to gather information about the development team members and create objects for each team member
// When a user starts the application, they're prompted to enter the team manager's: Name, Employee ID, Email address, Office number
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter a name."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "id",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an ID."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an email address."
            }
            return true
        },
    },
    {
        type: "number",
        message: "What is the team manager's office number?",
        name: "office",
        validate: (value) => {
            if (!value) {
                return "No numeric input. Please enter an office number."
            }
            return true
        },
    },
];

// When a user enters those requirements, the user is presented with a menu with the option to: Add an engineer, Add an intern, Finish building the team
const menuOptions = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: [
            "Add an engineer",
            "Add an intern",
            "Finish building the team",
        ],
    },
];

// When a user selects the engineer option, the user is prompted to enter the following: Engineer's Name, ID, Email, GitHub username
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter a name."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an ID."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an email address."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter a GitHub username."
            }
            return true
        },
    },
];

// When a user selects the intern option, the user is prompted to enter the following: Intern’s name, ID, Email, school
const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter a name."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an ID."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter an email address."
            }
            return true
        },
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
        validate: (value) => {
            if (!value) {
                return "No input. Please enter a school name."
            }
            return true
        },
    },
];

// Function to initialize the application with questions for the manager user
function promptForManager() {
    // Prompt for the manager
    inquirer.prompt(managerQuestions).then(response => {
        // populate manager info
        let manager = new Manager(response.name, response.id, response.email, response.office);
        teamMembers.push(manager);
        promptForNextEmployee();
    })
}

// Function to prompt for adding a new employee
function promptForNextEmployee() {
    inquirer.prompt(menuOptions).then(response => {
        if (response.option === "Add an engineer") {
            // promptForEngineer
            promptForEngineer();
        }
        else if (response.option === "Add an intern") {
            // promptForIntern
            promptForIntern();
        }
        else {
            // use the provided variable outputPath and call the render function with the team array containing all employee objects
            generateHTML();
        }
    })
}

// Function to prompt for adding a new engineer
function promptForEngineer() {
    inquirer.prompt(engineerQuestions).then(response => {
        // populate engineer info
        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        // add new engineer to team array
        teamMembers.push(engineer);
        promptForNextEmployee();
    })
}

// Function to prompt for adding a new intern
function promptForIntern() {
    inquirer.prompt(internQuestions).then(response => {
        // populate intern info
        let intern = new Intern(response.name, response.id, response.email, response.school);
        // add new intern to team array
        teamMembers.push(intern);
        promptForNextEmployee();
    })
}

// Function to generate a webpage/HTML file named team.html in the output folder
function generateHTML() {
    fs.writeFileSync(outputPath, render(teamMembers));
    console.log("You have successfully generated a webpage named team.html in the output folder!");
    // To exit the application
    process.exit(0);
}

// Call the function to prompt the manager user for input
promptForManager();


