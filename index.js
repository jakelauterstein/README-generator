// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project'
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Please provide a Table of Contents for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any guidelines for installation of your project or dependencies necessary'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any guidelines for usage of your project'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for your project from the checkboxes',
        choices: ['MIT', 'BSD', 'ISC', 'GNU GPL']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list all contributors to your projects'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please list any tests for functionality of the project/dependencies'
    },
    {
        type: 'input',
        name: 'github',
        message: 'please provide a link to your github for user convenience'
    },
    {
        type: 'input',
        name: 'email',
        message: 'please provide your email for user questions/comments'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
                    .then(data => {
                        console.log(data);
                        writeToFile('./dest/generated.md', generateMarkdown(data))
                    })
}

// Function call to initialize app
init();
