// TODO: Include packages needed for this application,

import generateMarkdown from './utils/generateMarkdown';

var inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [

    // "Project title?",
    // "Project description?",
    // "Installation instructions?",
    // "Usage information?",
    // "Contribution instructions?",
    // "Test instructions?"

    {name: 'input', message: 'Project title?'},

    {
        type: 'rawlist', name: 'license', message: 'License?',
        choices: [
            'MIT',
            'Apache 2.0',
            'GNU General Public v3.0',
            'Eclipse Public License 2.0',
            'Creative Commons Zero v1.0',
            'The Unlicense',
            'Mozilla Public License 2.0'
        ]
    },

    {name: 'desc', message: 'Project description?'},
    {name: 'install', message: 'Installation instructions?'},
    {name: 'usage', message: 'Usage information?'},
    {name: 'contr', message: 'Contribution instructions?'},
    {name: 'test', message: 'Test instructions?'},
    {name: 'githubID', message: 'Github username?'},
    {name: 'email', message: 'Email?'},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    let prompt = inquirer.createPromptModule();

    prompt(questions)
        .then(answers => {
            console.log(answers);

        })

}

// Function call to initialize app
init();
