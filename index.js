const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Use Inquirer to gather information about the development team members and create objects for each team member
// When a user starts the application, they're prompted to enter the team manager's: Name, Employee ID, Email address, Office number
const userQuestions = [
    {
        type: 'input',
        message: 'What is the name of your manager?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the employee ID of your manager?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What is the Email address of your manager?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the office number of your manager?',
        name: 'managerOfficeNo',
    },
];

// When a user enters those requirements, the user is presented with a menu with the option to: Add an engineer, Add an intern, Finish building the team
const menuOptions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building the team',
        ],
    },
];

// When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu

inquirer.prompt([{
    //manager questions
}]).then(response => {
    // populate manager info
    // promptForNextEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const buildPage = () => {
// render(myArrayOfTeamMembers)
}
