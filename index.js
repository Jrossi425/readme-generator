// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            name: 'Title',
            message: 'What is the name of your project?',
            type: 'input'
        },
        {
            name: 'Description',
            message: 'What is the app?',
            type: 'input'
        },
        {
            name: 'Installation',    
            message: 'How do you install this app?',
            type: 'input',
        },
        {
            name: 'Usage',
            message: 'How do you use the app?',
            type: 'input',
        },
        {
            name: 'License',
            message: 'Which lisence are you using for this app?',
            type: 'list',
            choices: ['MIT', 'Apache 2.0', 'ISC', 'Microsoft Public License']
        },
        {
            name: 'Contributing',
            message: 'Who has contributed to this app?',
            type: 'input'
        },
        {
            name: 'Tests',
            message: 'Tests for this app?',
            type: 'input'
        },
        {
            name: 'Github',
            message: 'What is your Github?',
            type: 'input'
        },
        {
            name: 'Email',
            message: 'What is your Email?',
            type: 'input'
        }
    ]).then(answers => {
        fs.writeFile('./dist/README.md', generateMarkdown(answers), (err) => {
            if (err) {
                return console.log(err);
                }
                console.log('Success!');
                });
    });
}

// Function call to initialize app
init();
