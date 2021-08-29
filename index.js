const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const jest = require('jest');
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));

// linking employees sheets
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

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


const teamMembers = [];

function pickamember() {
    inquirer.prompt([{

        type: 
    }])
}

function createManager() {
    inquirer.prompt([{

            type: 'input',
            name: 'Name',
            message: "what is your name? (Required):",
            default: [''],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('!:');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'id',
            message: "what is your id? (Required):",
            default: [''],
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('!:');
                    return false;
                }
            } 
        },
            {
                type: 'input',
                name: 'officeNumber',
                message: "what is your officeNumber? (Required):",
                default: [''],
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('!:');
                        return false;
                    }
                }
            },
                {
                    type: 'input',
                    name: 'role',
                    message: "what is your role? (Required):",
                    default: [''],
                    validate: roleInput => {
                        if (roleInput) {
                            return true;
                        } else {
                            console.log('!:');
                            return false;
                        }
                    }
                }]).then(answers =>{
                    let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                    teamMembers.push(manager)});
                }

            // create two more function engineer and intern
            //  inside the .then manager call () what they want to create next
            // ask whether they want to create engineer, intern else complete.
            // if statement to call engineer, intern, or build. 

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(inquirerResponses => {
            console.log(inquirerResponses);
            console.log('is this working?..');
            writeToFile('myteam.html', generateHTML({
                ...inquirerResponses
            }));
        });
    };

    // Function call to initialize app
    createManager();