const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const jest = require('jest');

inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));
// linking employees sheets
const employee = require('./lib/Employee.js');
const engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');
const manager = require('./lib/Manager.js');

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


const teamMembers=[];

function createManager () {
    inquirer [{
        type: 'suggest',
        name: '',
        message: "? (Required):",
        // what is your name 
        // what is your id 
        // what is your email address?
        // what is your office number?
        
        
        inquirer .then(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber); 
    }]


    inquirer.prompt([{
        type:"input",
        name:"managersName",
        message:"What is the team manager's name?",

    }
    ]).then(answers) {

        const manager = new Manager(answers.name);
        teamMembers.push(manager)

    }

}



inquirer [
    
    {
        type: 'suggest',
        name: '',
        message: "? (Required):",
        default: [''],
        suggestions: [''],
        validate: githubSuggest => {
            if (githubSuggest) {
                return true;
            } else {
                console.log('!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: '',
        message: "? (Required):",
        default: [''],
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('!:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: '',
        message: "? (Required):",
        default: [''],
        validate: titleInput => {
            if () {
                return true;
            } else {
                console.log('You need to enter a project name!:');
                return false;
            }
        }
    },
    {
        type: 'suggest',
        name: '',
        message: "(Required):",
        suggestions: [''],
        validate: descriptionSuggest => {
            if () {
                return true;
            } else {
                console.log('!');
                return false;
            }
        }
    },
    {
        type: 'suggest',
        name: '',
        message: " (Required):",
        suggestions: ['', ''],
        validate: linkSuggest => {
            if (linkSuggest) {
                return true;
            } else {
                console.log('!');
                return false;
            }

            // create .then 
            const manager = newManager(.)

        } 
    },        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log(inquirerResponses);
        console.log('is this working?..');
        writeToFile('index.html', generateHTML({...inquirerResponses}));
    });
};

// Function call to initialize app
init();